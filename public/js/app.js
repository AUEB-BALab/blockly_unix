/************************************************************
 * app.js
 ************************************************************/
// Flag to track if the workspace has changed after execution
let workspaceChangedAfterLastExecution = false;
// Flag to indicate if execution has occurred
let hasExecuted = false;
// Variable to store the executed workspace state
let executedWorkspace = '';
// Serialize the current workspace state
const initialState = Blockly.serialization.workspaces.save(workspace);

// Initialize Blockly when the window loads
window.onload = initBlockly;

/**
 * Initializes the Blockly workspace by loading the appropriate workspace
 * based on user authentication.
 */
async function initBlockly() {
  try {
    const { token, user } = await fetchAuthToken();
    if (token) {
      await loadAutoSavedWorkspace(user.id);
    } else {
      loadWorkspace();
    }
  } catch (error) {
    console.error('Initialization error:', error);
    loadWorkspace();
  }
}

/**
 * Fetches the authentication token and user information from the server.
 * @returns {Promise<{token: string, user: Object}>} An object containing the auth token and user data.
 */
async function fetchAuthToken() {
  const response = await fetch('/auth-token');
  if (!response.ok) {
    throw new Error('Failed to fetch authentication token.');
  }
  const data = await response.json();
  return { token: data.authToken, user: data.user };
}

/**
 * Automatically saves the current workspace to the server if the user is authenticated.
 */
async function autoSaveWorkspace() {
  try {
    const { token, user } = await fetchAuthToken();
    if (!token || !user || !user.id) return;

    document.getElementById('savedWorkspaces').style.display = 'inline-block';

    const state = Blockly.serialization.workspaces.save(workspace);
    const jsonState = JSON.stringify(state);

    if (jsonState) {
      const response = await fetch('/autoSaveWorkspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workspaceData: jsonState, userId: user.id })
      });

      const result = await response.json();
      if (result.error) {
        console.error('Error auto-saving workspace:', result.error);
      } else {
        console.log('Workspace auto-saved successfully.');
      }
    }
  } catch (error) {
    console.error('Error during auto-save:', error);
  }
}

/**
 * Loads the auto-saved workspace for the authenticated user.
 * @param {string} userId - The ID of the authenticated user.
 */
async function loadAutoSavedWorkspace(userId) {
  try {
    const workspaces = await fetchUserWorkspaces(userId);
    const autoSaveWorkspace = workspaces.find(
      (ws) => ws.workspaceName === '__autosave__'
    );

    if (autoSaveWorkspace) {
      const workspaceData = await fetchWorkspaceData(autoSaveWorkspace.id);
      if (workspaceData) {
        Blockly.serialization.workspaces.load(
          JSON.parse(workspaceData),
          workspace
        );
        console.log('Autosaved workspace loaded successfully.');
      }
    } else {
      console.log('No autosaved workspace found for user ID:', userId);
    }
  } catch (error) {
    console.error('Error loading auto-saved workspace:', error);
    alert('Failed to load autosaved workspace. Please try again.');
  }
}

/**
 * Fetches the workspaces associated with a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} An array of workspace objects.
 */
async function fetchUserWorkspaces(userId) {
  const response = await fetch(`/getUserWorkspaces?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user workspaces.');
  }
  const data = await response.json();
  return data.workspaces;
}

/**
 * Fetches the data for a specific workspace by its ID.
 * @param {string} workspaceId - The ID of the workspace.
 * @returns {Promise<string|null>} The workspace data as a JSON string or null if not found.
 */
async function fetchWorkspaceData(workspaceId) {
  const response = await fetch(`/getWorkspace?workspaceId=${workspaceId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch workspace data.');
  }
  const data = await response.json();
  return data.workspaceData || null;
}

/**
 * Loads the workspace from local storage if available.
 */
function loadWorkspace() {
  const jsonState = localStorage.getItem('blocklyWorkspace');
  if (jsonState) {
    console.log('blocklyWorkspace found in local storage.');
    try {
      const state = JSON.parse(jsonState);
      Blockly.serialization.workspaces.load(state, workspace);
      console.log('Blockly workspace loaded successfully from local storage.');
    } catch (error) {
      console.error('Error parsing JSON from local storage:', error);
    }
  } else {
    console.log('No saved blocklyWorkspace found in local storage.');
  }
}

/**
 * Automatically saves the guest user's workspace data when the window is about to unload.
 */
window.addEventListener('beforeunload', saveGuestWorkspaceData);

/**
 * Saves the guest user's workspace data to the server.
 */
async function saveGuestWorkspaceData() {
  try {
    const state = Blockly.serialization.workspaces.save(workspace);
    const jsonState = JSON.stringify(state);

    const { token } = await fetchAuthToken();
    if (!token) {
      await fetch('/saveGuestWorkspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ workspaceData: jsonState })
      });
    }
  } catch (error) {
    console.error('Error saving guest workspace data:', error);
  }
}

/**
 * Updates the saved workspaces dropdown for the authenticated user.
 * @param {string} userId - The ID of the user.
 */
async function updateWorkspaces(userId) {
  try {
    const workspaces = await fetchUserWorkspaces(userId);
    const savedWorkspacesSelect = document.getElementById('savedWorkspaces');

    // Clear existing options
    savedWorkspacesSelect.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select a workspace';
    savedWorkspacesSelect.appendChild(defaultOption);

    // Populate dropdown with workspaces excluding special names
    workspaces
      .filter(
        (ws) =>
          ws.workspaceName !== '__autosave__' &&
          ws.workspaceName !== 'executedWorkspace'
      )
      .forEach((workspace) => {
        const option = document.createElement('option');
        option.value = workspace.id;
        option.text = workspace.workspaceName;
        savedWorkspacesSelect.appendChild(option);
      });
  } catch (error) {
    console.error('Error updating workspaces:', error);
  }
}

/**
 * Manages the workspace-related UI elements based on user authentication.
 */
async function manageWorkspaces() {
  try {
    const { token, user } = await fetchAuthToken();
    if (!token || !user || !user.id) return;

    const savedWorkspacesSelect = document.getElementById('savedWorkspaces');
    savedWorkspacesSelect.style.display = 'inline-block';
    await updateWorkspaces(user.id);

    // Show the save button
    document.getElementById('saveButton').style.display = 'inline-block';

    // Add event listener for workspace selection
    savedWorkspacesSelect.addEventListener('change', async () => {
      const selectedWorkspaceId = savedWorkspacesSelect.value;
      if (selectedWorkspaceId) {
        try {
          const workspaceData = await fetchWorkspaceData(selectedWorkspaceId);
          if (workspaceData) {
            Blockly.serialization.workspaces.load(
              JSON.parse(workspaceData),
              workspace
            );
          } else {
            console.error('Invalid workspace data.');
            alert('Failed to load workspace. Please try again.');
          }
        } catch (error) {
          console.error('Error loading workspace:', error);
          alert('Failed to load workspace. Please try again.');
        }
      }
    });

    // Add event listener for saving a workspace
    document
      .getElementById('saveButton')
      .addEventListener('click', handleSaveWorkspace);
  } catch (error) {
    console.error('Error managing workspaces:', error);
  }
}

/**
 * Handles the saving of the current workspace with a user-provided name.
 */
async function handleSaveWorkspace(event) {
  event.preventDefault(); // Prevent default form submission

  try {
    const { token, user } = await fetchAuthToken();
    if (!token || !user || !user.id) {
      alert('You must be logged in to save a workspace.');
      return;
    }

    const workspaceName = prompt('Enter a name for your workspace:');
    if (!workspaceName || !workspaceName.trim()) {
      alert('Workspace name cannot be empty.');
      return;
    }

    const state = Blockly.serialization.workspaces.save(workspace);
    const jsonState = JSON.stringify(state);

    if (jsonState) {
      const response = await fetch('/saveWorkspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workspaceData: jsonState,
          userId: user.id,
          workspaceName: workspaceName.trim()
        })
      });

      const result = await response.json();
      if (result.error) {
        console.error('Error saving workspace:', result.error);
        alert('Failed to save workspace. Please try again.');
      } else {
        await updateWorkspaces(user.id);
        alert('Workspace saved successfully.');
      }
    } else {
      console.error('Invalid workspace data.');
      alert('Failed to save workspace. Invalid data.');
    }
  } catch (error) {
    console.error('Error saving workspace:', error);
    alert('Failed to save workspace. Please try again.');
  }
}

/**
 * Manages the Blockly theme based on user selection.
 * @param {Event} event - The change event from the theme dropdown.
 */
function manageTheme(event) {
  const selectedTheme = event.target.value;

  switch (selectedTheme) {
    case 'halloween':
      workspace.setTheme(Blockly.Themes.Halloween);
      toggleThemeStyles(true, false);
      break;
    case 'dark':
      workspace.setTheme(Blockly.Themes.Dark);
      toggleThemeStyles(false, true);
      break;
    default:
      workspace.setTheme(Blockly.Themes.Classic);
      toggleThemeStyles(false, false);
      break;
  }
}

/**
 * Toggles the enabling/disabling of theme stylesheets.
 * @param {boolean} enableLight - Whether to enable the light theme stylesheet.
 * @param {boolean} enableDark - Whether to enable the dark theme stylesheet.
 */
function toggleThemeStyles(enableLight, enableDark) {
  document.getElementById('light-theme').disabled = !enableLight;
  document.getElementById('dark-theme').disabled = !enableDark;
}

/**
 * Loads a language file dynamically.
 * @param {string} language - The language code to load.
 * @returns {Promise<void>}
 */
function loadLanguageFile(language) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `msg/${language}.js`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

let selectedLanguage = 'en';

/**
 * Loads the initial language for Blockly.
 */
function loadInitialLanguage() {
  loadLanguageFile(selectedLanguage)
    .then(() => initBlockly())
    .catch((error) => {
      console.error('Error loading initial language:', error);
    });
}

/**
 * Handles changes in the language selection dropdown.
 * @param {Event} event - The change event from the language dropdown.
 */
function handleLanguageChange(event) {
  selectedLanguage = event.target.value;
  loadLanguageFile(selectedLanguage)
    .then(() => {
      workspace.clear();
      initBlockly();
    })
    .catch((error) => {
      console.error('Error changing language:', error);
    });
}

/**
 * Handles workspace changes by marking the workspace as changed and triggering auto-save.
 */
function onWorkspaceChange() {
  workspaceChangedAfterLastExecution = true;
  hasExecuted = false;
  autoSaveOrLocalSave();
}

/**
 * Determines whether to auto-save to the server or save locally based on authentication.
 */
async function autoSaveOrLocalSave() {
  try {
    const { token } = await fetchAuthToken();
    if (token) {
      await autoSaveWorkspace();
    } else {
      saveWorkspaceLocally();
    }
  } catch (error) {
    console.error('Error during workspace save decision:', error);
  }
}

/**
 * Saves the current workspace to local storage.
 */
function saveWorkspaceLocally() {
  const state = Blockly.serialization.workspaces.save(workspace);
  const jsonState = JSON.stringify(state);
  localStorage.setItem('blocklyWorkspace', jsonState);
}

/**
 * Copies the generated command text to the clipboard.
 */
function copyToClipboard() {
  const text = document.getElementById('resultsText').innerText;
  navigator.clipboard.writeText(text).catch((err) => {
    console.error('Unable to copy:', err);
    alert('Failed to copy text.');
  });
}

/**
 * Executes the Blockly workspace by generating a command and displaying it.
 */
function executeButton() {
  const generatedCommand = generateCommandFromWorkspace();
  const blockCount = workspace.getTopBlocks().length;
  saveWorkspaceOnExecute(blockCount);

  document.getElementById('resultsText').innerText =
    generatedCommand.length > 0 ? generatedCommand : '\n';
}

/**
 * Saves the workspace state upon execution if changes have been made.
 * @param {number} blockCount - The number of top-level blocks in the workspace.
 */
async function saveWorkspaceOnExecute(blockCount) {
  if (blockCount <= 0) {
    console.log('No blocks to execute.');
    return;
  }

  try {
    const { token, user } = await fetchAuthToken();
    if (workspaceChangedAfterLastExecution) {
      const state = Blockly.serialization.workspaces.save(workspace);
      executedWorkspace = JSON.stringify(state);
      hasExecuted = true;
      workspaceChangedAfterLastExecution = false;

      if (token && executedWorkspace && user.id) {
        await fetch('/saveWorkspace', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            workspaceData: executedWorkspace,
            userId: user.id,
            workspaceName: 'executedWorkspace'
          })
        });
      } else {
        console.log(
          'Workspace has changed since execution:',
          workspaceChangedAfterLastExecution
        );
        saveGuestWorkspaceData();
      }
    }
  } catch (error) {
    console.error('Error saving workspace on execute:', error);
  }
}

/**
 * Resets the Blockly workspace after user confirmation.
 */
function resetWorkspace() {
  if (
    confirm(
      'Are you sure you want to reset the workspace? All blocks will be deleted.'
    )
  ) {
    workspace.clear();
    console.log('Workspace has been reset.');
  }
}

// Event Listeners

// Clipboard copy button
document
  .getElementById('copyButton')
  .addEventListener('click', copyToClipboard);

// Execute button
document
  .getElementById('executeButton')
  .addEventListener('click', executeButton);

// Reset workspace button
document
  .getElementById('resetButton')
  .addEventListener('click', resetWorkspace);

// Theme selection dropdown
document
  .getElementById('themeDropdown')
  .addEventListener('change', manageTheme);

/* Language selection dropdown
document
  .getElementById('languageMenu')
  .addEventListener('change', handleLanguageChange);
*/

// Load initial language and manage workspaces when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadInitialLanguage();
  manageWorkspaces();
});

// Add workspace change listener
Blockly.getMainWorkspace().addChangeListener(onWorkspaceChange);
