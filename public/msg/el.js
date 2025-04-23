window.MSG = {
  TEXT_PROCESSING: 'Επεξεργασία Κειμένου',
  FILE_INPUTS: 'Είσοδοι Αρχείων',
  FILE_DIR_OPERATIONS: 'Λειτουργίες Αρχείων και Καταλόγων',
  IO_REDIRECTION: 'Ανακατεύθυνση Εισόδου/Εξόδου',
  REGULAR_EXPRESSIONS: 'Κανονικές Εκφράσεις',
  FIELD_PROCESSING: 'Επεξεργασία Πεδίου',
  VARIABLES: 'Μεταβλητές',
  SYSTEM_MONITORING: 'Παρακολούθηση Συστήματος',
  NETWORK_OPERATIONS: 'Λειτουργίες Δικτύου',
  TEXT_OUTPUT: 'Έξοδος Κειμένου',
  STRING_FUNCTIONS: 'Συναρτήσεις Κειμένου',
  LOGIC: 'Λογική',
  LOOPS: 'Βρόχοι',
  MATH: 'Μαθηματικά',
  OTHER_COMMANDS: 'Άλλες Εντολές',
  title: 'Κώδικας',
  blocks: 'Μπλοκ',
  linkTooltip: 'Αποθήκευση και σύνδεση με τα μπλοκ.',
  runTooltip:
    'Εκτελέστε το πρόγραμμα που ορίζεται από τα μπλοκ στον χώρο εργασίας.',
  badCode: 'Σφάλμα προγράμματος:\n%1',
  timeout: 'Υπερβήκατε τον μέγιστο αριθμό επαναλήψεων εκτέλεσης.',
  trashTooltip: 'Απόρριψη όλων των μπλοκ.',
  catLogic: 'Λογική',
  catLoops: 'Βρόχοι',
  catMath: 'Μαθηματικά',
  catText: 'Κείμενο',
  catLists: 'Λίστες',
  catColour: 'Χρώμα',
  catVariables: 'Μεταβλητές',
  catFunctions: 'Συναρτήσεις',
  listVariable: 'λίστα',
  textVariable: 'κείμενο',
  httpRequestError: 'Υπήρξε πρόβλημα με το αίτημα.',
  linkAlert:
    'Μοιραστείτε τα μπλοκ σας με αυτόν τον δημόσιο σύνδεσμο. Θα τα διαγράψουμε αν δεν χρησιμοποιηθούν για έναν χρόνο. Δεν συνδέονται με τον λογαριασμό σας και διαχειρίζονται σύμφωνα με την Πολιτική Απορρήτου της Google. Παρακαλούμε να μην συμπεριλάβετε προσωπικές πληροφορίες.\n\n%1',
  hashError:
    "Συγνώμη, το '%1' δεν αντιστοιχεί σε κανένα αποθηκευμένο πρόγραμμα.",
  loadError:
    'Δεν ήταν δυνατή η φόρτωση του αποθηκευμένου αρχείου σας. Ίσως δημιουργήθηκε με διαφορετική έκδοση του Blockly;',
  parseError:
    "Σφάλμα ανάλυσης %1:\n%2\n\nΕπιλέξτε 'OK' για να εγκαταλείψετε τις αλλαγές σας ή 'Ακύρωση' για να συνεχίσετε να επεξεργάζεστε το %1."
};
// This file was automatically generated.  Do not modify.

('use strict');

var Blockly = Blockly || { Msg: Object.create(null) };

Blockly.Msg['ADD_COMMENT'] = 'Προσθήκη σχολίου';
Blockly.Msg['APPEND'] = 'Προσθήκη αποτελέσματος στο';
Blockly.Msg['APPEND_TOOLTIP'] =
  'Προσθέτει το αποτέλεσμα σε ένα ήδη υπάρχον αρχείο';
Blockly.Msg['APPEND_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ARGUMENT_COUNT'] = 'Αριθμός ορισμάτων';
Blockly.Msg['ARGUMENT_COUNT_TOOLTIP'] = 'Επιστρέφει τον αριθμό των ορισμάτων';
Blockly.Msg['ARGUMENT_COUNT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ARGUMENT_ARRAY'] = 'Όρισμα στην θέση %1';
Blockly.Msg['ARRAY_CREATE_WITH'] = 'Δημιουργία πίνακα με';
Blockly.Msg['ARRAY_CREATE_WITH_TOOLTIP'] = 'Προσθήκη στοιχείου στον πίνακα';
Blockly.Msg['ARRAY_CREATE_EMPTY_TITLE'] = 'Δημιουργία λίστας στοιχείων';
Blockly.Msg['ARRAY_CREATE_WITH_HELPURL'] = '';
Blockly.Msg['ARRAY_GET_INDEX'] = 'Στον πίνακα %1';
Blockly.Msg['ARRAY_GET_INDEX_INDEX'] = 'το στοιχείο στη θέση %1';
Blockly.Msg['ARRAY_GET_INDEX_TOOLTIP'] =
  'Επιστρέφει το στοιχείο στην θέση του πίνακα';
Blockly.Msg['ARRAY_GET_INDEX_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ARRAY_SET_INDEX'] = 'Στον πίνακα %1';
Blockly.Msg['ARRAY_SET_INDEX_INDEX'] = 'όρισε στην θέση %1';
Blockly.Msg['ARRAY_SET_INDEX_VALUE'] = 'σε %1';
Blockly.Msg['ARRAY_SET_INDEX_TOOLTIP'] =
  'Ορίζει το στοιχείο στην θέση του πίνακα';
Blockly.Msg['ARRAY_SET_INDEX_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ATAN2'] = 'Εφαπτομένη τόξου του %1 / %2 σε ακτίνια';
Blockly.Msg['ATAN2_TOOLTIP'] =
  'Επιστρέφει την εφαπτομένη του τόξου των δύο αριθμών';
Blockly.Msg['ATAN2_HELPURL'] = 'https://en.wikipedia.org/wiki/Atan2';
Blockly.Msg['AWK_TEXT_DATA_PROCESSING'] = 'Επεξεργασία δεδομένων κειμένου';
Blockly.Msg['AWK_INPUT_DELIMITER'] = 'Διαχωριστής εισόδου';
Blockly.Msg['AWK_CONDITION_ACTION'] = 'Τοποθετήστε συνθήκη και ενέργεια';
Blockly.Msg['AWK_TOOLTIP'] = 'Γλώσσα σάρωσης και επεξεργασίας με βάση μοτίβα';
Blockly.Msg['AWK_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['BEGIN'] = 'Αρχή επεξεργασίας';
Blockly.Msg['BEGIN_ACTION'] = 'Ενέργεια';
Blockly.Msg['BEGIN_TOOLTIP'] = 'Εκτέλεση μία φορά πριν την επεξεργασία';
Blockly.Msg['BEGIN_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['BEGIN_END'] =
  'Εκτέλεση μία φορά\n πριν/μετά την επεξεργασία δεδομένων';
Blockly.Msg['BEGIN_END_TOOLTIP'] =
  'Γλώσσα σάρωσης και επεξεργασίας με βάση μοτίβα';
Blockly.Msg['BEGIN_END_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['CAT'] = 'Εμφάνιση αρχείου';
Blockly.Msg['CAT_LINE_NUMBERS'] = 'Με αριθμούς γραμμών';
Blockly.Msg['CAT_TOOLTIP'] = 'Συνένωση και εκτύπωση αρχείων';
Blockly.Msg['CAT_SQUEEZE_EMPTY_LINES'] = 'Συμπίεση κενών γραμμών %1';
Blockly.Msg['CAT_END_OF_LINE_WITH_DOLLAR'] =
  'Εμφάνιση μη εκτυπώσιμων χαρακτήρων \n και επισήμανση τέλους γραμμής με $ %1';
Blockly.Msg['CAT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['CD'] = 'Αλλαγή καταλόγου σε';
Blockly.Msg['CD_TOOLTIP'] = 'Συνένωση και εκτύπωση αρχείων';
Blockly.Msg['CD_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['COLUMN'] = 'Αριθμός στήλης';
Blockly.Msg['COLUMN_TOOLTIP'] = 'Γράψτε έναν αριθμό στήλης';
Blockly.Msg['COLUMN_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['CONDITION_OUTPUT'] = 'Τοποθετήστε συνθήκη αναζήτησης';
Blockly.Msg['CONDITION_OUTPUT_TOOLTIP'] =
  'Δημιουργία συνθήκης αναζήτησης με δηλώσεις if';
Blockly.Msg['CONDITION_OUTPUT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['CONDITION_ACTION_COND'] = 'Συνθήκη';
Blockly.Msg['CONDITION_ACTION_ACT'] = 'Ενέργεια';
Blockly.Msg['CONDITION_ACTION_TOOLTIP'] = 'Δημιουργία συνθήκης και ενέργειας';
Blockly.Msg['CONDITION_ACTION_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['COSINE'] = 'Συνημίτονο του %1 σε ακτίνια';
Blockly.Msg['COSINE_TOOLTIP'] = 'Επιστρέφει το συνημίτονο του αριθμού';
Blockly.Msg['COSINE_HELPURL'] = 'https://en.wikipedia.org/wiki/Sine_and_cosine';
Blockly.Msg['CUT'] = 'Αποκοπή σε αρχείο ή συμβολοσειρά';
Blockly.Msg['CUT_DELIMITER'] = 'Διαχωριστικό';
Blockly.Msg['CUT_DEFINE_COLUMNS'] = 'Ορισμός στηλών';
Blockly.Msg['CUT_COLUMNS_START'] = 'Στήλες απο : ';
Blockly.Msg['CUT_COLUMNS_END'] = 'εώς : ';
Blockly.Msg['CUT_SPECIFIC_CHARACTERS'] = 'Επιλογή χαρακτήρων';
Blockly.Msg['CUT_START'] = 'Έναρξη υποσυμβολοσειράς : ';
Blockly.Msg['CUT_END'] = 'Τέλος : ';
Blockly.Msg['CUT_TOOLTIP'] =
  'Αποκοπή σε ένα αρχείο ή μια συμβολοσειρά.\nΓια συνεχόμενες αποκοπές χρησιμοποιήστε κόμμα(,) , για αποκοπές εύρους χρησιμοποιήστε παύλα (-)';
Blockly.Msg['CUT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['END'] = 'Τέλος επεξεργασίας';
Blockly.Msg['END_ACTION'] = 'Ενέργεια';
Blockly.Msg['END_TOOLTIP'] = 'Εκτέλεση μία φορά μετά την επεξεργασία';
Blockly.Msg['END_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ENVIRONMENT_VARIABLE'] = 'Μεταβλητή περιβάλλοντος';
Blockly.Msg['ENVIRONMENT_VARIABLE_TOOLTIP'] =
  'Επιστρέφει την τιμή μιας μεταβλητής περιβάλλοντος';
Blockly.Msg['ENVIRONMENT_VARIABLE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['EXPONENT'] = 'Εκθετικό του %1';
Blockly.Msg['EXPONENT_TOOLTIP'] = 'Επιστρέφει το εκθετικό του αριθμού';
Blockly.Msg['EXPONENT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Exponentiation';
Blockly.Msg['FNR'] = 'Αριθμός εγγραφής αρχείου στο τρέχον αρχείο';
Blockly.Msg['FNR_TOOLTIP'] =
  'Επιστρέφει τον αριθμό της τρέχουσας εγγραφής εντός του αρχείου';
Blockly.Msg['FNR_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FIELD_SEPARATOR'] = 'Ορισμός διαχωριστικού πεδίου σε %1';
Blockly.Msg['FIELD_SEPARATOR_TOOLTIP'] = 'Ορίζει το διαχωριστικό πεδίου';
Blockly.Msg['FIELD_SEPARATOR_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FIELD_NUMBER'] = 'Τρέχων πεδίο';
Blockly.Msg['FIELD_NUMBER_TOOLTIP'] =
  'Αντιπροσωπεύει τον τρέχοντα αριθμό πεδίου (στήλη)';
Blockly.Msg['FIELD_NUMBER_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FILE_END_START_WILDCHARS'] = 'Όνομα αρχείου';
Blockly.Msg['FILE_END_START_WILDCHARS_WITH'] = 'με';
Blockly.Msg['FILE_END_START_WILDCHARS_TOOLTIP'] =
  'Ορισμός έναρξης ή τέλους κατά την αναζήτηση αρχείων με χαρακτήρες μπαλαντέρ';
Blockly.Msg['FILE_END_START_WILDCHARS_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FILENAME'] = 'Όνομα αρχείου';
Blockly.Msg['FILENAME_TOOLTIP'] = 'Αντιπροσωπεύει ένα όνομα αρχείου';
Blockly.Msg['FILENAME_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FILENAME_VARIABLE'] = 'Όνομα τρέχοντος αρχείου';
Blockly.Msg['FILENAME_VARIABLE_TOOLTIP'] =
  'Αντιπροσωπεύει το όνομα του τρέχοντος αρχείου';
Blockly.Msg['FILENAME_VARIABLE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FILES_CREATE_WITH'] = 'Εισαγωγή ονόματος αρχείου';
Blockly.Msg['FILES_CREATE_WITH_TOOLTIP'] = 'Προσθήκη αρχείων';
Blockly.Msg['FILES_CREATE_EMPTY_TITLE'] = 'Δημιουργία λίστας αρχείων';
Blockly.Msg['FILES_CREATE_WITH_HELPURL'] = '';
Blockly.Msg['FIND_DUPLICATES'] = 'Εύρεση διπλότυπων στο αρχείο\n';
Blockly.Msg['FIND_DUPLICATES_TOOLTIP'] =
  'Εύρεση διπλότυπων γραμμών σε ένα αρχείο';
Blockly.Msg['FIND_DUPLICATES_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['FIND'] = 'Εύρεση στην ιεραρχία αρχείων\n';
Blockly.Msg['FIND_DIRECTORY_SEARCH'] = 'Αναζήτηση στον κατάλογο %1 ';
Blockly.Msg['FIND_CHOOSE_TYPE'] = 'για %1';
Blockly.Msg['FIND_SUBDIRECTORIES'] = 'Μην περιλαμβάνετε υποκαταλόγους %1';
Blockly.Msg['FIND_DIRECTORY_DEFINE'] = 'Ορισμός άλλου καταλόγου %1';
Blockly.Msg['FIND_MODIFIED'] = 'Τροποποιήθηκε τελευταίες %1 %2';
Blockly.Msg['FIND_ACCESSED'] = 'Πρόσβαση τελευταίες %1 %2';
Blockly.Msg['FIND_METADATA'] = 'Μεταδεδομένα άλλαξαν τελευταίες %1 %2';
Blockly.Msg['FIND_SIZE'] = 'Μέγεθος %1 από %2 %3';
Blockly.Msg['FIND_NAME_DEFINE'] = 'Με όνομα όπως %1';
Blockly.Msg['FIND_EXECUTE_COMMAND'] =
  'Εκτελέστε την ακόλουθη εντολή σε\n όλα τα αρχεία που βρέθηκαν %1';
Blockly.Msg['FIND_TOOLTIP'] = 'Εύρεση αρχείων σε καταλόγους και υποκαταλόγους';
Blockly.Msg['FIND_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['GREP'] = 'Αναζήτηση σε αρχείο ή κατάλογο ';
Blockly.Msg['GREP_PATTERN_DEFINE'] = 'Το μοτίβο %1';
Blockly.Msg['GREP_REGULAR_EXPRESSION_CHECK'] = 'Κανονική έκφραση %1';
Blockly.Msg['GREP_CASE_INSENSITIVE'] = 'Χωρίς διάκριση πεζών-κεφαλαίων %1';
Blockly.Msg['GREP_WHOLE_WORD_SEARCH'] = 'Αναζήτηση πλήρους λέξης %1';
Blockly.Msg['GREP_COUNT_MATCHES'] = 'Μέτρηση των αντιστοιχιών %1';
Blockly.Msg['GREP_PATTERN_NEGATION'] =
  'Έξοδος γραμμών που δεν ταιριάζουν στο μοτίβο %1';
Blockly.Msg['GREP_RECURSIVE_SEARCH'] = 'Αναζήτηση αναδρομικά %1';
Blockly.Msg['GREP_DISPLAY_LINE_NUMBERS'] = 'Έξοδος αριθμών γραμμών %1';
Blockly.Msg['GREP_STOP_AFTER_NUM_MATCHES'] =
  'Σταμάτησε μετά από %1 αντιστοιχίες';
Blockly.Msg['GREP_MULTIPLE_PATTERN_SEARCH'] = 'Αναζήτηση με πολλαπλά μοτίβα %1';
Blockly.Msg['GREP_PRINT_CONTEXT_BEFORE_MATCH'] =
  'Έξοδος %1 γραμμών πριν από την αντιστοιχία %2';
Blockly.Msg['GREP_PRINT_CONTEXT_AFTER_MATCH'] =
  'Έξοδος %1 γραμμών μετά την αντιστοιχία %2';
Blockly.Msg['GREP_SHOW_FILENAME'] = 'Έξοδος ονόματος αρχείου %1';
Blockly.Msg['GREP_TOOLTIP'] = 'Αναζήτηση σε αρχείο με μοτίβο';
Blockly.Msg['GREP_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['GZIP_FILE'] = '%1 Αρχείο';
Blockly.Msg['GZIP_KEEP_ORIGINAL_FILE'] = 'Διατήρηση αρχικού αρχείου %1';
Blockly.Msg['GZIP_LEVEL_OF_COMPRESSION'] = 'Επίπεδο συμπίεσης %1';
Blockly.Msg['GZIP_CHANGE_SUFFIX'] = 'Aλλαγή κατάληξης απο .gz σε';
Blockly.Msg['GZIP_TOOLTIP'] = 'Συμπίεση/αποσυμπίεση αρχείου';
Blockly.Msg['GZIP_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['HEAD_MESSAGE'] = 'Πρώτα στοιχεία';
Blockly.Msg['HEAD_METRIC'] = 'Μετρική %1';
Blockly.Msg['HEAD_NUMBER_OF'] = 'Αριθμός %1';
Blockly.Msg['HEAD_TOOLTIP'] = 'Έξοδος του πρώτου μέρους των αρχείων';
Blockly.Msg['HEAD_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['LENGTH'] = 'Μήκος του αλφαριθμητικού %1';
Blockly.Msg['LENGTH_TOOLTIP'] = 'Επιστρέφει το μήκος του αλφαριθμητικού';
Blockly.Msg['LENGTH_HELPURL'] =
  'https://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.Msg['LS_MESSAGE'] = 'Λίστα αρχείων & καταλόγων';
Blockly.Msg['LS_SHOW_DETAILS'] = 'Έξοδος λεπτομερειών %1';
Blockly.Msg['LS_SUBDIRECTORIES'] = 'Αναζήτηση σε όλους τους υποκαταλόγους %1';
Blockly.Msg['LS_HIDDEN'] = 'Έξοδος κρυφών αρχείων %1';
Blockly.Msg['LS_REVERSE_ORDER'] = 'Έξοδος σε αντίστροφη σειρά %1';
Blockly.Msg['LS_TOOLTIP'] = 'Λίστα περιεχομένων καταλόγου';
Blockly.Msg['LS_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['LN_MESSAGE'] = 'Σύνδεση αρχείων';
Blockly.Msg['LN_SYMBOLIC_LINK'] = 'Δημιουργία συμβολικού συνδέσμου %1';
Blockly.Msg['LN_SOURCE'] = 'Αρχείο προέλευσης';
Blockly.Msg['LN_TARGET'] = 'Αρχείο προορισμού';
Blockly.Msg['LN_FORCE'] = 'Επιβολή αντικατάστασης %1';
Blockly.Msg['LN_INTERACTIVE'] = 'Προτροπή πριν από την αντικατάσταση %1';
Blockly.Msg['LN_TOOLTIP'] =
  'Δημιουργεί συνδέσμους αρχείων. Υποστηρίζει συμβολικούς συνδέσμους, αναγκαστική αντικατάσταση και λεπτομερή έξοδο.';
Blockly.Msg['LOGARITHM'] = 'Λογάριθμος του %1';
Blockly.Msg['LOGARITHM_TOOLTIP'] = 'Επιστρέφει το λογάριθμο του αριθμού';
Blockly.Msg['LOGARITHM_HELPURL'] = 'https://en.wikipedia.org/wiki/Logarithm';
Blockly.Msg['MKDIR_MESSAGE'] = 'Δημιουργία καταλόγου';
Blockly.Msg['MKDIR_CREATE_SUBDIRECTORIES'] =
  'Δημιουργήστε επίσης καταλόγους γονέων %1';
Blockly.Msg['MKDIR_WRITE_DIRECTORY'] = 'Γράψτε όνομα καταλόγου ή διαδρομή %1';
Blockly.Msg['MKDIR_TOOLTIP'] = 'Δημιουργία καταλόγου';
Blockly.Msg['MKDIR_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['MV_MESSAGE'] = 'Μετακίνηση αρχείων';
Blockly.Msg['MV_NOT_PROMPT_CONFIRMATION'] = 'Μην ζητήσεις επιβεβαίωση %1';
Blockly.Msg['MV_PROMPT_CONFIRMATION'] =
  'Ζήτα επιβεβαίωση προτού εκτελεστεί η εντολή %1';
Blockly.Msg['MV_NOT_OVERWRITE'] = 'Μη αντικατάσταση αρχείου %1';
Blockly.Msg['MV_SOURCE'] = 'Αρχείο προέλευσης';
Blockly.Msg['MV_DEST'] = 'Τοποθεσία προορισμού';
Blockly.Msg['RECORD_NUMBER'] = 'Τρέχουσα εγγραφή';
Blockly.Msg['RECORD_NUMBER_TOOLTIP'] =
  'Αντιπροσωπεύει τον τρέχοντα αριθμό εγγραφής (γραμμής)';
Blockly.Msg['RECORD_NUMBER_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['CANNOT_DELETE_VARIABLE_PROCEDURE'] =
  "Δεν μπορεί να διαγραφεί η μεταβλητή '%1' επειδή είναι μέρος του ορισμού της συνάρτησης '%2'";
Blockly.Msg['CHANGE_VALUE_TITLE'] = 'Αλλαγή τιμής:';
Blockly.Msg['CLEAN_UP'] = 'Τακτοποίηση μπλοκ';
Blockly.Msg['COLLAPSED_WARNINGS_WARNING'] =
  'Τα συμπτυγμένα μπλοκ περιέχουν προειδοποιήσεις.';
Blockly.Msg['COLLAPSE_ALL'] = 'Σύμπτυξη μπλοκ';
Blockly.Msg['COLLAPSE_BLOCK'] = 'Σύμπτυξη μπλοκ';
Blockly.Msg['COLOUR_BLEND_COLOUR1'] = 'χρώμα 1';
Blockly.Msg['COLOUR_BLEND_COLOUR2'] = 'χρώμα 2';
Blockly.Msg['COLOUR_BLEND_HELPURL'] =
  'https://meyerweb.com/eric/tools/color-blend/#:::rgbp';
Blockly.Msg['COLOUR_BLEND_RATIO'] = 'Αναλογία';
Blockly.Msg['COLOUR_BLEND_TITLE'] = 'Συγχώνευση';
Blockly.Msg['COLOUR_BLEND_TOOLTIP'] =
  'Συγχωνεύει δύο χρώματα μαζί με μια δεδομένη αναλογία (0.0 - 1.0).';
Blockly.Msg['COLOUR_PICKER_HELPURL'] = 'https://en.wikipedia.org/wiki/Color';
Blockly.Msg['COLOUR_PICKER_TOOLTIP'] = 'Επιλέξτε ένα χρώμα από την παλέτα.';
Blockly.Msg['COLOUR_RANDOM_HELPURL'] = 'http://randomcolour.com';
Blockly.Msg['COLOUR_RANDOM_TITLE'] = 'τυχαίο χρώμα';
Blockly.Msg['COLOUR_RANDOM_TOOLTIP'] = 'Επιλέξτε ένα χρώμα τυχαία.';
Blockly.Msg['COLOUR_RGB_BLUE'] = 'μπλε';
Blockly.Msg['COLOUR_RGB_GREEN'] = 'πράσινο';
Blockly.Msg['COLOUR_RGB_HELPURL'] =
  'https://www.december.com/html/spec/colorpercompact.html';
Blockly.Msg['COLOUR_RGB_RED'] = 'κόκκινο';
Blockly.Msg['COLOUR_RGB_TITLE'] = 'χρώμα με';
Blockly.Msg['COLOUR_RGB_TOOLTIP'] =
  'Δημιουργήστε ένα χρώμα με την καθορισμένη ποσότητα κόκκινου, πράσινου και μπλε. Όλες οι τιμές πρέπει να είναι μεταξύ 0 και 100.';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_HELPURL'] =
  'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK'] = 'διακοπή από βρόχο';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE'] =
  'συνέχεια με την επόμενη επανάληψη του βρόχου';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'] =
  'Διακοπή από τον περιέχοντα βρόχο.';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE'] =
  'Παράκαμψη του υπολοίπου του βρόχου και συνέχιση με την επόμενη επανάληψη.';
Blockly.Msg['CONTROLS_FLOW_STATEMENTS_WARNING'] =
  'Προειδοποίηση: Αυτό το μπλοκ μπορεί να χρησιμοποιηθεί μόνο μέσα σε βρόχο.';
Blockly.Msg['CONTROLS_FOREACH_HELPURL'] =
  'https://github.com/google/blockly/wiki/Loops#for-each';
Blockly.Msg['CONTROLS_FOREACH_TITLE'] = 'Για κάθε στοιχείο %1 στη λίστα %2';
Blockly.Msg['CONTROLS_FOREACH_TOOLTIP'] =
  "Για κάθε στοιχείο σε μια λίστα, ορίστε τη μεταβλητή '%1' στο στοιχείο και μετά κάντε κάποιες δηλώσεις.";
Blockly.Msg['CONTROLS_FOR_HELPURL'] =
  'https://github.com/google/blockly/wiki/Loops#count-with';
Blockly.Msg['CONTROLS_FOR_TITLE'] = 'μέτρηση με %1 από %2 έως %3 με βήμα %4';
Blockly.Msg['CONTROLS_FOR_TOOLTIP'] =
  "Έχετε τη μεταβλητή '%1' να πάρει τις τιμές από τον αριθμό έναρξης έως τον αριθμό λήξης, μετρώντας με το καθορισμένο διάστημα και κάνετε τα καθορισμένα μπλοκ.";
Blockly.Msg['CONTROLS_IF_ELSEIF_TOOLTIP'] =
  'Προσθήκη μιας συνθήκης στο μπλοκ if.';
Blockly.Msg['CONTROLS_IF_ELSE_TOOLTIP'] =
  'Προσθήκη μιας τελικής, catch-all συνθήκης στο μπλοκ if.';
Blockly.Msg['CONTROLS_IF_HELPURL'] =
  'https://github.com/google/blockly/wiki/IfElse';
Blockly.Msg['CONTROLS_IF_IF_TOOLTIP'] =
  'Προσθέστε, αφαιρέστε ή αναδιατάξτε ενότητες για να αναδιαμορφώσετε αυτό το μπλοκ if.';
Blockly.Msg['CONTROLS_IF_MSG_ELSE'] = 'αλλιώς';
Blockly.Msg['CONTROLS_IF_MSG_ELSEIF'] = 'αλλιώς αν';
Blockly.Msg['CONTROLS_IF_MSG_IF'] = 'Αν';
Blockly.Msg['CONTROLS_IF_TOOLTIP_1'] =
  'Αν μια τιμή είναι αληθής, τότε κάντε κάποιες δηλώσεις.';
Blockly.Msg['CONTROLS_IF_TOOLTIP_2'] =
  'Αν μια τιμή είναι αληθής, τότε κάντε το πρώτο μπλοκ δηλώσεων. Διαφορετικά, κάντε το δεύτερο μπλοκ δηλώσεων.';
Blockly.Msg['CONTROLS_IF_TOOLTIP_3'] =
  'Αν η πρώτη τιμή είναι αληθής, τότε κάντε το πρώτο μπλοκ δηλώσεων. Διαφορετικά, αν η δεύτερη τιμή είναι αληθής, κάντε το δεύτερο μπλοκ δηλώσεων.';
Blockly.Msg['CONTROLS_IF_TOOLTIP_4'] =
  'Αν η πρώτη τιμή είναι αληθής, τότε κάντε το πρώτο μπλοκ δηλώσεων. Διαφορετικά, αν η δεύτερη τιμή είναι αληθής, κάντε το δεύτερο μπλοκ δηλώσεων. Αν καμία από τις τιμές δεν είναι αληθής, κάντε το τελευταίο μπλοκ δηλώσεων.';
Blockly.Msg['CONTROLS_REPEAT_HELPURL'] =
  'https://en.wikipedia.org/wiki/For_loop';
Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'] = 'Κάντε';
Blockly.Msg['CONTROLS_REPEAT_TITLE'] = 'Επανάληψη %1 φορές';
Blockly.Msg['CONTROLS_REPEAT_TOOLTIP'] =
  'Κάντε κάποιες δηλώσεις αρκετές φορές.';
Blockly.Msg['CONTROLS_WHILEUNTIL_HELPURL'] =
  'https://github.com/google/blockly/wiki/Loops#repeat';
Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'] = 'Επανάληψη μέχρι';
Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_WHILE'] = 'Επανάληψη ενώ';
Blockly.Msg['CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL'] =
  'Ενώ μια τιμή είναι ψευδής, τότε κάντε κάποιες δηλώσεις.';
Blockly.Msg['CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'] =
  'Ενώ μια τιμή είναι αληθής, τότε κάντε κάποιες δηλώσεις.';
Blockly.Msg['DELETE_ALL_BLOCKS'] = 'Διαγραφή όλων των %1 μπλοκ;';
Blockly.Msg['DELETE_ARRAY'] = 'Διαγραφή πίνακα %1';
Blockly.Msg['DELETE_ARRAY_TOOLTIP'] = 'Διαγράψτε τον επιλεγμένο πίνακα.';
Blockly.Msg['DELETE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['DELETE_ARRAY_ELEMENT'] = 'Διαγραφή στον πίνακα %1';
Blockly.Msg['DELETE_ARRAY_ELEMENT_INDEX'] = 'στη θέση %1';
Blockly.Msg['DELETE_ARRAY_ELEMENT_TOOLTIP'] =
  'Διαγράψτε το επιλεγμένο στοιχείο από τον πίνακα.';
Blockly.Msg['DELETE_ARRAY_ELEMENT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['DELETE_BLOCK'] = 'Διαγραφή μπλοκ';
Blockly.Msg['DELETE_VARIABLE'] = "Διαγραφή της μεταβλητής '%1'";
Blockly.Msg['DELETE_VARIABLE_CONFIRMATION'] =
  "Διαγραφή %1 χρήσεων της μεταβλητής '%2';";
Blockly.Msg['DELETE_X_BLOCKS'] = 'Διαγραφή %1 μπλοκ';
Blockly.Msg['DIALOG_CANCEL'] = 'Ακύρωση';
Blockly.Msg['DIALOG_OK'] = 'OK';
Blockly.Msg['DISABLE_BLOCK'] = 'Απενεργοποίηση μπλοκ';
Blockly.Msg['DUPLICATE_BLOCK'] = 'Αντίγραφο';
Blockly.Msg['DUPLICATE_COMMENT'] = 'Αντίγραφο σχολίου';
Blockly.Msg['ENABLE_BLOCK'] = 'Ενεργοποίηση μπλοκ';
Blockly.Msg['EXIT'] = 'Έξοδος από το πρόγραμμα %1';
Blockly.Msg['EXIT_TOOLTIP'] = 'Έξοδος από το πρόγραμμα.';
Blockly.Msg['EXIT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['EXPAND_ALL'] = 'Επέκταση μπλοκ';
Blockly.Msg['EXPAND_BLOCK'] = 'Επέκταση μπλοκ';
Blockly.Msg['EXTERNAL_INPUTS'] = 'Εξωτερικές εισροές';
Blockly.Msg['HELP'] = 'Βοήθεια';
Blockly.Msg['INDEX'] = 'Θέση του αλφαριθμητικού %1 στο %2';
Blockly.Msg['INDEX_TOOLTIP'] =
  'Επιστρέφει τη θέση του αλφαριθμητικού στο αλφαριθμητικό.';
Blockly.Msg['INDEX_HELPURL'] =
  'https://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.Msg['INLINE_INPUTS'] = 'Εσωτερικές εισροές';
Blockly.Msg['LISTS_CREATE_EMPTY_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#create-empty-list';
Blockly.Msg['LISTS_CREATE_EMPTY_TITLE'] = 'δημιουργία κενής λίστας';
Blockly.Msg['LISTS_CREATE_EMPTY_TOOLTIP'] =
  'Επιστρέφει μια λίστα, μήκους 0, που δεν περιέχει δεδομένα';
Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TITLE_ADD'] = 'λίστα';
Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP'] =
  'Προσθέστε, αφαιρέστε ή αναδιατάξτε ενότητες για να αναδιαμορφώσετε αυτό το μπλοκ λίστας.';
Blockly.Msg['LISTS_CREATE_WITH_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#create-list-with';
Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = 'δημιουργία λίστας με';
Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP'] =
  'Προσθέστε ένα στοιχείο στη λίστα.';
Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP'] =
  'Δημιουργία λίστας με οποιονδήποτε αριθμό στοιχείων.';
Blockly.Msg['LISTS_GET_INDEX_FIRST'] = 'πρώτο';
Blockly.Msg['LISTS_GET_INDEX_FROM_END'] = '# από το τέλος';
Blockly.Msg['LISTS_GET_INDEX_FROM_START'] = '#';
Blockly.Msg['LISTS_GET_INDEX_GET'] = 'λήψη';
Blockly.Msg['LISTS_GET_INDEX_GET_REMOVE'] = 'λήψη και αφαίρεση';
Blockly.Msg['LISTS_GET_INDEX_LAST'] = 'τελευταίο';
Blockly.Msg['LISTS_GET_INDEX_RANDOM'] = 'τυχαίο';
Blockly.Msg['LISTS_GET_INDEX_REMOVE'] = 'αφαίρεση';
Blockly.Msg['LISTS_GET_INDEX_TAIL'] = '';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FIRST'] =
  'Επιστρέφει το πρώτο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FROM'] =
  'Επιστρέφει το στοιχείο στη καθορισμένη θέση σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_LAST'] =
  'Επιστρέφει το τελευταίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_RANDOM'] =
  'Επιστρέφει ένα τυχαίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST'] =
  'Αφαιρεί και επιστρέφει το πρώτο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM'] =
  'Αφαιρεί και επιστρέφει το στοιχείο στη καθορισμένη θέση σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST'] =
  'Αφαιρεί και επιστρέφει το τελευταίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM'] =
  'Αφαιρεί και επιστρέφει ένα τυχαίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_END'] = 'έως # από το τέλος';
Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_START'] = 'έως #';
Blockly.Msg['LISTS_GET_SUBLIST_END_LAST'] = 'έως το τελευταίο';
Blockly.Msg['LISTS_GET_SUBLIST_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
Blockly.Msg['LISTS_GET_SUBLIST_START_FIRST'] =
  'λήψη υπολίστας από το πρώτο στοιχείο';
Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_END'] =
  'λήψη υπολίστας από # από το τέλος';
Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_START'] = 'λήψη υπολίστας από #';
Blockly.Msg['LISTS_GET_SUBLIST_TAIL'] = '';
Blockly.Msg['LISTS_GET_SUBLIST_TOOLTIP'] =
  'Δημιουργεί ένα αντίγραφο του καθορισμένου τμήματος μιας λίστας.';
Blockly.Msg['LISTS_INDEX_FROM_END_TOOLTIP'] = '%1 είναι το τελευταίο στοιχείο.';
Blockly.Msg['LISTS_INDEX_FROM_START_TOOLTIP'] = '%1 είναι το πρώτο στοιχείο.';
Blockly.Msg['LISTS_INDEX_OF_FIRST'] = 'εύρεση πρώτης εμφάνισης του στοιχείου';
Blockly.Msg['LISTS_INDEX_OF_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg['LISTS_INDEX_OF_LAST'] =
  'εύρεση τελευταίας εμφάνισης του στοιχείου';
Blockly.Msg['LISTS_INDEX_OF_TOOLTIP'] =
  'Επιστρέφει τον δείκτη της πρώτης/τελευταίας εμφάνισης του στοιχείου στη λίστα. Επιστρέφει %1 αν το στοιχείο δεν βρεθεί.';
Blockly.Msg['LISTS_INLIST'] = 'στη λίστα';
Blockly.Msg['LISTS_ISEMPTY_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#is-empty';
Blockly.Msg['LISTS_ISEMPTY_TITLE'] = '%1 είναι κενή';
Blockly.Msg['LISTS_ISEMPTY_TOOLTIP'] =
  'Επιστρέφει αληθές αν η λίστα είναι κενή.';
Blockly.Msg['LISTS_LENGTH_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#length-of';
Blockly.Msg['LISTS_LENGTH_TITLE'] = 'μήκος του %1';
Blockly.Msg['LISTS_LENGTH_TOOLTIP'] = 'Επιστρέφει το μήκος μιας λίστας.';
Blockly.Msg['LISTS_REPEAT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#create-list-with';
Blockly.Msg['LISTS_REPEAT_TITLE'] =
  'δημιουργία λίστας με το στοιχείο %1 να επαναλαμβάνεται %2 φορές';
Blockly.Msg['LISTS_REPEAT_TOOLTIP'] =
  'Δημιουργεί μια λίστα που αποτελείται από την δεδομένη τιμή να επαναλαμβάνεται τον καθορισμένο αριθμό φορών.';
Blockly.Msg['LISTS_REVERSE_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
Blockly.Msg['LISTS_REVERSE_MESSAGE0'] = 'αντιστροφή %1';
Blockly.Msg['LISTS_REVERSE_TOOLTIP'] =
  'Αντιστροφή ενός αντιγράφου μιας λίστας.';
Blockly.Msg['LISTS_SET_INDEX_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg['LISTS_SET_INDEX_INPUT_TO'] = 'ως';
Blockly.Msg['LISTS_SET_INDEX_INSERT'] = 'εισαγωγή στη';
Blockly.Msg['LISTS_SET_INDEX_SET'] = 'Ορισμός';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST'] =
  'Εισάγει το στοιχείο στην αρχή μιας λίστας.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FROM'] =
  'Εισάγει το στοιχείο στη καθορισμένη θέση σε μια λίστα.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_LAST'] =
  'Προσθέτει το στοιχείο στο τέλος μιας λίστας.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM'] =
  'Εισάγει το στοιχείο τυχαία σε μια λίστα.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FIRST'] =
  'Ορίζει το πρώτο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FROM'] =
  'Ορίζει το στοιχείο στη καθορισμένη θέση σε μια λίστα.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_LAST'] =
  'Ορίζει το τελευταίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_RANDOM'] =
  'Ορίζει ένα τυχαίο στοιχείο σε μια λίστα.';
Blockly.Msg['LISTS_SORT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
Blockly.Msg['LISTS_SORT_ORDER_ASCENDING'] = 'αύξουσα';
Blockly.Msg['LISTS_SORT_ORDER_DESCENDING'] = 'φθίνουσα';
Blockly.Msg['LISTS_SORT_TITLE'] = 'ταξινόμηση %1 %2 %3';
Blockly.Msg['LISTS_SORT_TOOLTIP'] = 'Ταξινομεί ένα αντίγραφο μιας λίστας.';
Blockly.Msg['LISTS_SORT_TYPE_IGNORECASE'] =
  'αλφαβητικά, χωρίς διάκριση πεζών-κεφαλαίων';
Blockly.Msg['LISTS_SORT_TYPE_NUMERIC'] = 'αριθμητικά';
Blockly.Msg['LISTS_SORT_TYPE_TEXT'] = 'αλφαβητικά';
Blockly.Msg['LISTS_SPLIT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
Blockly.Msg['LISTS_SPLIT_LIST_FROM_TEXT'] = 'δημιουργία λίστας από κείμενο';
Blockly.Msg['LISTS_SPLIT_TEXT_FROM_LIST'] = 'δημιουργία κειμένου από λίστα';
Blockly.Msg['LISTS_SPLIT_TOOLTIP_JOIN'] =
  'Συνένωση μιας λίστας κειμένων σε ένα κείμενο, με διαχωριστικό.';
Blockly.Msg['LISTS_SPLIT_TOOLTIP_SPLIT'] =
  'Διαίρεση κειμένου σε μια λίστα κειμένων, σπάζοντας σε κάθε διαχωριστικό.';
Blockly.Msg['LISTS_SPLIT_WITH_DELIMITER'] = 'με διαχωριστικό';
Blockly.Msg['LOGIC_BOOLEAN_FALSE'] = 'ψευδές';
Blockly.Msg['LOGIC_BOOLEAN_HELPURL'] =
  'https://github.com/google/blockly/wiki/Logic#values';
Blockly.Msg['LOGIC_BOOLEAN_TOOLTIP'] = 'Επιστρέφει είτε αληθές είτε ψευδές.';
Blockly.Msg['LOGIC_BOOLEAN_TRUE'] = 'αληθές';
Blockly.Msg['LOGIC_COMPARE_HELPURL'] =
  'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_EQ'] =
  'Επιστρέφει αληθές αν οι δύο είσοδοι είναι ίσες.';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GT'] =
  'Επιστρέφει αληθές αν η πρώτη είσοδος είναι μεγαλύτερη από τη δεύτερη είσοδο.';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_GTE'] =
  'Επιστρέφει αληθές αν η πρώτη είσοδος είναι μεγαλύτερη ή ίση από τη δεύτερη είσοδο.';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LT'] =
  'Επιστρέφει αληθές αν η πρώτη είσοδος είναι μικρότερη από τη δεύτερη είσοδο.';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_LTE'] =
  'Επιστρέφει αληθές αν η πρώτη είσοδος είναι μικρότερη ή ίση από τη δεύτερη είσοδο.';
Blockly.Msg['LOGIC_COMPARE_TOOLTIP_NEQ'] =
  'Επιστρέφει αληθές αν οι δύο είσοδοι δεν είναι ίσες.';
Blockly.Msg['LOGIC_NEGATE_HELPURL'] =
  'https://github.com/google/blockly/wiki/Logic#not';
Blockly.Msg['LOGIC_NEGATE_TITLE'] = 'Όχι %1';
Blockly.Msg['LOGIC_NEGATE_TOOLTIP'] =
  'Επιστρέφει αληθές αν η είσοδος είναι ψευδής. Επιστρέφει ψευδές αν η είσοδος είναι αληθής.';
Blockly.Msg['LOGIC_NULL'] = 'κενό';
Blockly.Msg['LOGIC_NULL_HELPURL'] =
  'https://en.wikipedia.org/wiki/Nullable_type';
Blockly.Msg['LOGIC_NULL_TOOLTIP'] = 'Επιστρέφει κενό.';
Blockly.Msg['LOGIC_OPERATION_AND'] = 'και';
Blockly.Msg['LOGIC_OPERATION_HELPURL'] =
  'https://github.com/google/blockly/wiki/Logic#logical-operations';
Blockly.Msg['LOGIC_OPERATION_OR'] = 'ή';
Blockly.Msg['LOGIC_OPERATION_TOOLTIP_AND'] =
  'Επιστρέφει αληθές αν και οι δύο είσοδοι είναι αληθείς.';
Blockly.Msg['LOGIC_OPERATION_TOOLTIP_OR'] =
  'Επιστρέφει αληθές αν τουλάχιστον μία από τις εισόδους είναι αληθής.';
Blockly.Msg['LOGIC_TERNARY_CONDITION'] = 'έλεγχος';
Blockly.Msg['LOGIC_TERNARY_HELPURL'] = 'https://en.wikipedia.org/wiki/%3F:';
Blockly.Msg['LOGIC_TERNARY_IF_FALSE'] = 'αν ψευδές';
Blockly.Msg['LOGIC_TERNARY_IF_TRUE'] = 'αν αληθές';
Blockly.Msg['LOGIC_TERNARY_TOOLTIP'] =
  "Ελέγχει την συνθήκη 'έλεγχος'. Αν η συνθήκη είναι αληθής, επιστρέφει την τιμή 'αν αληθές'; διαφορετικά επιστρέφει την τιμή 'αν ψευδές'.";
Blockly.Msg['MATCH'] = 'Ταίριασμα μοτίβου %1 με το αλφαριθμητικό %2';
Blockly.Msg['MATCH_HELPURL'] =
  'https://en.wikipedia.org/wiki/Regular_expression';
Blockly.Msg['MATCH_TOOLTIP'] =
  'Ταίριασμα μοτίβου αλφαριθμητικού με το αλφαριθμητικό.';
Blockly.Msg['MATH_ADDITION_SYMBOL'] = '+';
Blockly.Msg['MATH_ARITHMETIC_HELPURL'] =
  'https://en.wikipedia.org/wiki/Arithmetic';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_ADD'] =
  'Επιστρέφει το άθροισμα των δύο αριθμών.';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_DIVIDE'] =
  'Επιστρέφει το πηλίκο των δύο αριθμών.';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MINUS'] =
  'Επιστρέφει τη διαφορά των δύο αριθμών.';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MULTIPLY'] =
  'Επιστρέφει το γινόμενο των δύο αριθμών.';
Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_POWER'] =
  'Επιστρέφει τον πρώτο αριθμό υψωμένο στη δύναμη του δεύτερου αριθμού.';
Blockly.Msg['MATH_ATAN2_HELPURL'] = 'https://en.wikipedia.org/wiki/Atan2';
Blockly.Msg['MATH_ATAN2_TITLE'] = 'atan2 του X:%1 Y:%2';
Blockly.Msg['MATH_ATAN2_TOOLTIP'] =
  'Επιστρέφει την αρκοτανγκεία του σημείου (X, Y) σε μοίρες από -180 έως 180.';
Blockly.Msg['MATH_CHANGE_HELPURL'] =
  'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
Blockly.Msg['MATH_CHANGE_TITLE'] = 'Αλλαγή %1 κατά %2';
Blockly.Msg['MATH_CHANGE_TOOLTIP'] =
  "Προσθέτει έναν αριθμό στη μεταβλητή '%1'.";
Blockly.Msg['MATH_CONSTANT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Mathematical_constant';
Blockly.Msg['MATH_CONSTANT_TOOLTIP'] =
  'Επιστρέφει μία από τις κοινές σταθερές: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…) ή ∞ (άπειρο).';
Blockly.Msg['MATH_CONSTRAIN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Clamping_(graphics)';
Blockly.Msg['MATH_CONSTRAIN_TITLE'] = 'περιορισμός %1 χαμηλό %2 υψηλό %3';
Blockly.Msg['MATH_CONSTRAIN_TOOLTIP'] =
  'Περιορίζει έναν αριθμό ώστε να είναι μεταξύ των καθορισμένων ορίων (συμπεριλαμβανομένων).';
Blockly.Msg['MATH_DIVISION_SYMBOL'] = '÷';
Blockly.Msg['MATH_IS_DIVISIBLE_BY'] = 'είναι διαιρούμενος από';
Blockly.Msg['MATH_IS_EVEN'] = 'είναι άρτιος';
Blockly.Msg['MATH_IS_NEGATIVE'] = 'είναι αρνητικός';
Blockly.Msg['MATH_IS_ODD'] = 'είναι περιττός';
Blockly.Msg['MATH_IS_POSITIVE'] = 'είναι θετικός';
Blockly.Msg['MATH_IS_PRIME'] = 'είναι πρώτος';
Blockly.Msg['MATH_IS_TOOLTIP'] =
  'Ελέγχει αν ένας αριθμός είναι άρτιος, περιττός, πρώτος, ακέραιος, θετικός, αρνητικός ή αν είναι διαιρούμενος από συγκεκριμένο αριθμό. Επιστρέφει αληθές ή ψευδές.';
Blockly.Msg['MATH_IS_WHOLE'] = 'είναι ακέραιος';
Blockly.Msg['MATH_MODULO_HELPURL'] =
  'https://en.wikipedia.org/wiki/Modulo_operation';
Blockly.Msg['MATH_MODULO_TITLE'] = 'υπόλοιπο της %1 ÷ %2';
Blockly.Msg['MATH_MODULO_TOOLTIP'] =
  'Επιστρέφει το υπόλοιπο από τη διαίρεση των δύο αριθμών.';
Blockly.Msg['MATH_MULTIPLICATION_SYMBOL'] = '×';
Blockly.Msg['MATH_NUMBER_HELPURL'] = 'https://en.wikipedia.org/wiki/Number';
Blockly.Msg['MATH_NUMBER_TOOLTIP'] = 'Ένας αριθμός.';
Blockly.Msg['MATH_ONLIST_HELPURL'] = '';
Blockly.Msg['MATH_ONLIST_OPERATOR_AVERAGE'] = 'μέσος όρος της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_MAX'] = 'μέγιστο της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_MEDIAN'] = 'διάμεσο της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_MIN'] = 'ελάχιστο της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_MODE'] = 'συχνότητες της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_RANDOM'] = 'τυχαίο στοιχείο της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_STD_DEV'] = 'τυπική απόκλιση της λίστας';
Blockly.Msg['MATH_ONLIST_OPERATOR_SUM'] = 'άθροισμα της λίστας';
Blockly.Msg['MATH_ONLIST_TOOLTIP_AVERAGE'] =
  'Επιστρέφει τον μέσο όρο (αριθμητική μέση τιμή) των αριθμητικών τιμών στη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MAX'] =
  'Επιστρέφει τον μεγαλύτερο αριθμό στη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MEDIAN'] =
  'Επιστρέφει τη διάμεσο αριθμό στη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MIN'] =
  'Επιστρέφει τον μικρότερο αριθμό στη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_MODE'] =
  'Επιστρέφει μια λίστα των πιο συχνών στοιχείων στη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_RANDOM'] =
  'Επιστρέφει ένα τυχαίο στοιχείο από τη λίστα.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_STD_DEV'] =
  'Επιστρέφει την τυπική απόκλιση της λίστας.';
Blockly.Msg['MATH_ONLIST_TOOLTIP_SUM'] =
  'Επιστρέφει το άθροισμα όλων των αριθμών στη λίστα.';
Blockly.Msg['MATH_POWER_SYMBOL'] = '^';
Blockly.Msg['MATH_RANDOM_FLOAT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Random_number_generation';
Blockly.Msg['MATH_RANDOM_FLOAT_TITLE_RANDOM'] = 'τυχαίο κλάσμα';
Blockly.Msg['MATH_RANDOM_FLOAT_TOOLTIP'] =
  'Επιστρέφει ένα τυχαίο κλάσμα μεταξύ 0.0 (συμπεριλαμβανομένου) και 1.0 (εξαιρουμένου).';
Blockly.Msg['MATH_RANDOM_INT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Random_number_generation';
Blockly.Msg['MATH_RANDOM_INT_TITLE'] = 'τυχαίος ακέραιος από %1 έως %2';
Blockly.Msg['MATH_RANDOM_INT_TOOLTIP'] =
  'Επιστρέφει έναν τυχαίο ακέραιο αριθμό μεταξύ των δύο καθορισμένων ορίων, συμπεριλαμβανομένων.';
Blockly.Msg['MATH_ROUND_HELPURL'] = 'https://en.wikipedia.org/wiki/Rounding';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUND'] = 'στρογγυλοποίηση';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUNDDOWN'] = 'στρογγυλοποίηση προς τα κάτω';
Blockly.Msg['MATH_ROUND_OPERATOR_ROUNDUP'] = 'στρογγυλοποίηση προς τα πάνω';
Blockly.Msg['MATH_ROUND_TOOLTIP'] =
  'Στρογγυλοποιεί έναν αριθμό προς τα πάνω ή προς τα κάτω.';
Blockly.Msg['MATH_SINGLE_HELPURL'] =
  'https://en.wikipedia.org/wiki/Square_root';
Blockly.Msg['MATH_SINGLE_OP_ABSOLUTE'] = 'απόλυτη τιμή';
Blockly.Msg['MATH_SINGLE_OP_ROOT'] = 'τετραγωνική ρίζα';
Blockly.Msg['MATH_SINGLE_TOOLTIP_ABS'] =
  'Επιστρέφει την απόλυτη τιμή ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_EXP'] =
  'Επιστρέφει το e υψωμένο στη δύναμη ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_LN'] =
  'Επιστρέφει τον φυσικό λογάριθμο ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_LOG10'] =
  'Επιστρέφει τον λογάριθμο βάσης 10 ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_NEG'] =
  'Επιστρέφει τον αρνητικό ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_POW10'] =
  'Επιστρέφει το 10 υψωμένο στη δύναμη ενός αριθμού.';
Blockly.Msg['MATH_SINGLE_TOOLTIP_ROOT'] =
  'Επιστρέφει την τετραγωνική ρίζα ενός αριθμού.';
Blockly.Msg['MATH_SUBTRACTION_SYMBOL'] = '-';
Blockly.Msg['MATH_TRIG_ACOS'] = 'ακ.συν';
Blockly.Msg['MATH_TRIG_ASIN'] = 'ακ.ημ';
Blockly.Msg['MATH_TRIG_ATAN'] = 'ακ.εφ';
Blockly.Msg['MATH_TRIG_COS'] = 'συν';
Blockly.Msg['MATH_TRIG_HELPURL'] =
  'https://en.wikipedia.org/wiki/Trigonometric_functions';
Blockly.Msg['MATH_TRIG_SIN'] = 'ημ';
Blockly.Msg['MATH_TRIG_TAN'] = 'εφ';
Blockly.Msg['MATH_TRIG_TOOLTIP_ACOS'] = 'Επιστρέφει την αρκοσίνη ενός αριθμού.';
Blockly.Msg['MATH_TRIG_TOOLTIP_ASIN'] = 'Επιστρέφει την αρκοσίνη ενός αριθμού.';
Blockly.Msg['MATH_TRIG_TOOLTIP_ATAN'] =
  'Επιστρέφει την αρκοτανγκεία ενός αριθμού.';
Blockly.Msg['MATH_TRIG_TOOLTIP_COS'] =
  'Επιστρέφει το συνημίτονο ενός αριθμού σε μοίρες (όχι σε ακτίνια).';
Blockly.Msg['MATH_TRIG_TOOLTIP_SIN'] =
  'Επιστρέφει το ημίτονο ενός αριθμού σε μοίρες (όχι σε ακτίνια).';
Blockly.Msg['MATH_TRIG_TOOLTIP_TAN'] =
  'Επιστρέφει την εφαπτομένη ενός αριθμού σε μοίρες (όχι σε ακτίνια).';
Blockly.Msg['NEW_COLOUR_VARIABLE'] = 'Δημιουργία μεταβλητής χρώματος...';
Blockly.Msg['NEW_NUMBER_VARIABLE'] = 'Δημιουργία μεταβλητής αριθμού...';
Blockly.Msg['NEW_STRING_VARIABLE'] = 'Δημιουργία μεταβλητής συμβολοσειράς...';
Blockly.Msg['NEW_VARIABLE'] = 'Δημιουργία μεταβλητής...';
Blockly.Msg['NEW_VARIABLE_TITLE'] = 'Νέο όνομα μεταβλητής:';
Blockly.Msg['NEW_VARIABLE_TYPE_TITLE'] = 'Νέος τύπος μεταβλητής:';
Blockly.Msg['NEXT'] = 'Παράλειψε τα υπόλοιπα μοτίβα της τρέχουσας γραμμής';
Blockly.Msg['NEXT_TOOLTIP'] =
  'Παράλειψη των υπόλοιπων μοτίβων της τρέχουσας γραμμής.';
Blockly.Msg['NEXT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['NEXT_FILE'] =
  'Παράλειψη του υπόλοιπου αρχείου και μετάβαση στο επόμενο';
Blockly.Msg['NEXT_FILE_TOOLTIP'] =
  'Παράλειψη του υπόλοιπου αρχείου και μετάβαση στο επόμενο.';
Blockly.Msg['NEXT_FILE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['ORDINAL_NUMBER_SUFFIX'] = '';
Blockly.Msg['OUTPUT_FIELD_SEPARATOR'] =
  'Ορισμός διαχωριστικού πεδίων εξόδου σε %1';
Blockly.Msg['OUTPUT_FIELD_SEPARATOR_TOOLTIP'] =
  'Ορίζει το διαχωριστικό των πεδίων εξόδου';
Blockly.Msg['OUTPUT_FIELD_SEPARATOR_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['PRINT_CREATE_WITH'] = 'Πολλαπλές εκτυπώσεις';
Blockly.Msg['PRINT_CREATE_WITH_TOOLTIP'] = 'Προσθήκη επιλογής εκτύπωσης';
Blockly.Msg['PRINT_CREATE_EMPTY_TITLE'] = 'Δημιουργία επιλογής εκτύπωσης';
Blockly.Msg['PRINT_CREATE_WITH_HELPURL'] = '';
Blockly.Msg['PROCEDURES_ALLOW_STATEMENTS'] = 'επιτρέψτε δηλώσεις';
Blockly.Msg['PROCEDURES_BEFORE_PARAMS'] = 'με:';
Blockly.Msg['PROCEDURES_CALLNORETURN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg['PROCEDURES_CALLNORETURN_TOOLTIP'] =
  "Εκτέλεση της συνάρτησης που ορίζει ο χρήστης '%1'.";
Blockly.Msg['PROCEDURES_CALLRETURN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg['PROCEDURES_CALLRETURN_TOOLTIP'] =
  "Εκτέλεση της συνάρτησης που ορίζει ο χρήστης '%1' και χρήση της εξόδου της.";
Blockly.Msg['PROCEDURES_CALL_BEFORE_PARAMS'] = 'με:';
Blockly.Msg['PROCEDURES_CREATE_DO'] = "Δημιουργία '%1'";
Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT'] =
  'Περιγράψτε αυτή τη συνάρτηση...';
Blockly.Msg['PROCEDURES_DEFNORETURN_DO'] = '';
Blockly.Msg['PROCEDURES_DEFNORETURN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg['PROCEDURES_DEFNORETURN_PROCEDURE'] = 'κάνε κάτι';
Blockly.Msg['PROCEDURES_DEFNORETURN_TITLE'] = 'προς';
Blockly.Msg['PROCEDURES_DEFNORETURN_TOOLTIP'] =
  'Δημιουργεί μια συνάρτηση χωρίς έξοδο.';
Blockly.Msg['PROCEDURES_DEFRETURN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg['PROCEDURES_DEFRETURN_RETURN'] = 'επιστροφή';
Blockly.Msg['PROCEDURES_DEFRETURN_TOOLTIP'] =
  'Δημιουργεί μια συνάρτηση με έξοδο.';
Blockly.Msg['PROCEDURES_DEF_DUPLICATE_WARNING'] =
  'Προειδοποίηση: Αυτή η συνάρτηση έχει διπλές παραμέτρους.';
Blockly.Msg['PROCEDURES_HIGHLIGHT_DEF'] = 'Επισήμανση ορισμού συνάρτησης';
Blockly.Msg['PROCEDURES_IFRETURN_HELPURL'] =
  'https://c2.com/cgi/wiki?GuardClause';
Blockly.Msg['PROCEDURES_IFRETURN_TOOLTIP'] =
  'Αν μια τιμή είναι αληθής, τότε επιστρέψτε μια δεύτερη τιμή.';
Blockly.Msg['PROCEDURES_IFRETURN_WARNING'] =
  'Προειδοποίηση: Αυτό το μπλοκ μπορεί να χρησιμοποιηθεί μόνο μέσα σε ορισμό συνάρτησης.';
Blockly.Msg['PROCEDURES_MUTATORARG_TITLE'] = 'όνομα εισόδου:';
Blockly.Msg['PROCEDURES_MUTATORARG_TOOLTIP'] =
  'Προσθέστε μια είσοδο στη συνάρτηση.';
Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TITLE'] = 'εισροές';
Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TOOLTIP'] =
  'Προσθέστε, αφαιρέστε ή αναδιατάξτε εισροές σε αυτήν τη συνάρτηση.';
Blockly.Msg['REDO'] = 'Ακύρωση αναίρεσης';
Blockly.Msg['REGOR_CREATE_WITH'] = 'πολλαπλά μοτίβα';
Blockly.Msg['REMOVE_COMMENT'] = 'Αφαίρεση σχολίου';
Blockly.Msg['RENAME_VARIABLE'] = 'Μετονομασία μεταβλητής...';
Blockly.Msg['RENAME_VARIABLE_TITLE'] =
  "Μετονομασία όλων των μεταβλητών '%1' σε:";
Blockly.Msg['RLENGTH'] = 'Μήκος αλφαρηθμιτικού που ταιριάζει με το μοτίβο';
Blockly.Msg['RLENGTH_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['RLENGTH_TOOLTIP'] =
  'Επιστρέφει το μήκος του αλφαριθμητικού που ταιριάζει με το μοτίβο.';
Blockly.Msg['RSTART'] = 'Θέση αλφαριθμητικού που ταιριάζει με το μοτίβο';
Blockly.Msg['RSTART_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['RSTART_TOOLTIP'] =
  'Επιστρέφει τη θέση του αλφαριθμητικού που ταιριάζει με το μοτίβο.';
Blockly.Msg['RM'] = 'Αφαίρεση αρχείου(ων)';
Blockly.Msg['RM_FORCE'] = 'Επιβολή αφαίρεσης χωρίς επιβεβαίωση %1';
Blockly.Msg['RM_REQUEST_CONFIRMATION'] =
  'Ζητήστε επιβεβαίωση πριν την αφαίρεση αρχείου(ων) %1';
Blockly.Msg['RM_REMOVE_DIRECTORIES'] = 'Αφαίρεση καταλόγων %1';
Blockly.Msg['RM_RECURSIVE'] = 'Αφαίρεση αναδρομικά %1';
Blockly.Msg['RM_TOOLTIP'] =
  'Αφαιρεί αρχεία και καταλόγους με βάση τις καθορισμένες επιλογές.';
Blockly.Msg['RANDOM'] = 'Τυχαίος αριθμός μεταξύ [0,1)';
Blockly.Msg['RANDOM_HELPURL'] =
  'https://en.wikipedia.org/wiki/Random_number_generation';
Blockly.Msg['RANDOM_TOOLTIP'] =
  'Επιστρέφει τυχαίο αριθμό μεταξύ 0.0 (συμπεριλαμβανομένου) και 1.0 (εξαιρουμένου).';
Blockly.Msg['RETURN'] = 'Επίστρεψε %1';
Blockly.Msg['RETURN_HELPURL'] =
  'https://en.wikipedia.org/wiki/Return_statement';
Blockly.Msg['RETURN_TOOLTIP'] = 'Επιστρέφει την τιμή.';
Blockly.Msg['SETSEED'] = 'Ορισμός σπόρου για τον τυχαίο αριθμό %1';
Blockly.Msg['SET_SEED_HELPURL'] = 'https://en.wikipedia.org/wiki/Random_seed';
Blockly.Msg['SET_SEED_TOOLTIP'] = 'Ορίζει τον σπόρο για τον τυχαίο αριθμό.';
Blockly.Msg['SINE'] = 'Ημίτονο του %1 σε ακτίνια';
Blockly.Msg['SINE_TOOLTIP'] = 'Επιστρέφει το ημίτονο μιας γωνίας σε ακτίνια.';
Blockly.Msg['SINE_HELPURL'] = 'https://en.wikipedia.org/wiki/Sine_and_cosine';
Blockly.Msg['SQUARE_ROOT'] = 'Τετραγωνική ρίζα του %1';
Blockly.Msg['SQUARE_ROOT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Square_root';
Blockly.Msg['SQUARE_ROOT_TOOLTIP'] =
  'Επιστρέφει την τετραγωνική ρίζα ενός αριθμού.';
Blockly.Msg['TEXT_APPEND_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#text-modification';
Blockly.Msg['TEXT_APPEND_TITLE'] = 'στο %1 προσθήκη κειμένου %2';
Blockly.Msg['TEXT_APPEND_TOOLTIP'] = "Προσθήκη κειμένου στη μεταβλητή '%1'.";
Blockly.Msg['TEXT_CHANGECASE_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'] = 'σε πεζά';
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_TITLECASE'] = 'σε Τίτλος';
Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'] = 'σε ΚΕΦΑΛΑΙΑ';
Blockly.Msg['TEXT_CHANGECASE_TOOLTIP'] =
  'Επιστρέφει ένα αντίγραφο του κειμένου με διαφορετική μορφή.';
Blockly.Msg['TEXT_CHARAT_FIRST'] = 'πάρε το πρώτο γράμμα';
Blockly.Msg['TEXT_CHARAT_FROM_END'] = 'πάρε το γράμμα # από το τέλος';
Blockly.Msg['TEXT_CHARAT_FROM_START'] = 'πάρε το γράμμα #';
Blockly.Msg['TEXT_CHARAT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#extracting-text';
Blockly.Msg['TEXT_CHARAT_LAST'] = 'πάρε το τελευταίο γράμμα';
Blockly.Msg['TEXT_CHARAT_RANDOM'] = 'πάρε τυχαίο γράμμα';
Blockly.Msg['TEXT_CHARAT_TAIL'] = '';
Blockly.Msg['TEXT_CHARAT_TITLE'] = 'στο κείμενο %1 %2';
Blockly.Msg['TEXT_CHARAT_TOOLTIP'] =
  'Επιστρέφει το γράμμα στη καθορισμένη θέση.';
Blockly.Msg['TEXT_COUNT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#counting-substrings';
Blockly.Msg['TEXT_COUNT_MESSAGE0'] = 'μέτρηση %1 στο %2';
Blockly.Msg['TEXT_COUNT_TOOLTIP'] =
  'Μετράει πόσες φορές εμφανίζεται κάποιο κείμενο μέσα σε κάποιο άλλο κείμενο.';
Blockly.Msg['TEXT_CREATE_JOIN_ITEM_TOOLTIP'] =
  'Προσθέτει ένα στοιχείο στο κείμενο.';
Blockly.Msg['TEXT_CREATE_JOIN_TITLE_JOIN'] = 'σύνδεση';
Blockly.Msg['TEXT_CREATE_JOIN_TOOLTIP'] =
  'Προσθήκη, αφαίρεση ή αναδιάταξη τμημάτων για αναδιάταξη αυτού του μπλοκ κειμένου.';
Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_END'] = 'έως το γράμμα # από το τέλος';
Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_START'] = 'έως το γράμμα #';
Blockly.Msg['TEXT_GET_SUBSTRING_END_LAST'] = 'έως το τελευταίο γράμμα';
Blockly.Msg['TEXT_GET_SUBSTRING_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
Blockly.Msg['TEXT_GET_SUBSTRING_INPUT_IN_TEXT'] = 'στο κείμενο';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FIRST'] =
  'πάρε υποσυμβολοσειρά από το πρώτο γράμμα';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_END'] =
  'πάρε υποσυμβολοσειρά από το γράμμα # από το τέλος';
Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_START'] =
  'πάρε υποσυμβολοσειρά από το γράμμα #';
Blockly.Msg['TEXT_GET_SUBSTRING_TAIL'] = '';
Blockly.Msg['TEXT_GET_SUBSTRING_TOOLTIP'] =
  'Επιστρέφει ένα καθορισμένο τμήμα του κειμένου.';
Blockly.Msg['TEXT_INDEXOF_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#finding-text';
Blockly.Msg['TEXT_INDEXOF_OPERATOR_FIRST'] =
  'βρες την πρώτη εμφάνιση του κειμένου';
Blockly.Msg['TEXT_INDEXOF_OPERATOR_LAST'] =
  'βρες την τελευταία εμφάνιση του κειμένου';
Blockly.Msg['TEXT_INDEXOF_TITLE'] = 'στο κείμενο %1 %2 %3';
Blockly.Msg['TEXT_INDEXOF_TOOLTIP'] =
  'Επιστρέφει τον δείκτη της πρώτης/τελευταίας εμφάνισης του πρώτου κειμένου στο δεύτερο κείμενο. Επιστρέφει %1 αν δεν βρεθεί το κείμενο.';
Blockly.Msg['TEXT_ISEMPTY_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
Blockly.Msg['TEXT_ISEMPTY_TITLE'] = '%1 είναι κενό';
Blockly.Msg['TEXT_ISEMPTY_TOOLTIP'] =
  'Επιστρέφει αληθές αν το δεδομένο κείμενο είναι κενό.';
Blockly.Msg['TEXT_JOIN_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#text-creation';
Blockly.Msg['TEXT_JOIN_TITLE_CREATEWITH'] = 'δημιουργία κειμένου με';
Blockly.Msg['TEXT_JOIN_TOOLTIP'] =
  'Δημιουργεί ένα κείμενο συνδέοντας μαζί οποιονδήποτε αριθμό στοιχείων.';
Blockly.Msg['TEXT_LENGTH_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#text-modification';
Blockly.Msg['TEXT_LENGTH_TITLE'] = 'μήκος του %1';
Blockly.Msg['TEXT_LENGTH_TOOLTIP'] =
  'Επιστρέφει τον αριθμό των γραμμάτων (συμπεριλαμβανομένων των κενών διαστημάτων) στο δεδομένο κείμενο.';
Blockly.Msg['TEXT_PRINT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#printing-text';
Blockly.Msg['TEXT_PRINT_TITLE'] = 'Εκτύπωση %1';
Blockly.Msg['TEXT_PRINT_TOOLTIP'] =
  'Εκτυπώνει το καθορισμένο κείμενο, αριθμό ή άλλη τιμή.';
Blockly.Msg['TEXT_PROMPT_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
Blockly.Msg['TEXT_PROMPT_TOOLTIP_NUMBER'] =
  'Προτροπή στον χρήστη για έναν αριθμό.';
Blockly.Msg['TEXT_PROMPT_TOOLTIP_TEXT'] =
  'Προτροπή στον χρήστη για κάποιο κείμενο.';
Blockly.Msg['TEXT_PROMPT_TYPE_NUMBER'] = 'προτροπή για αριθμό με μήνυμα';
Blockly.Msg['TEXT_PROMPT_TYPE_TEXT'] = 'προτροπή για κείμενο με μήνυμα';
Blockly.Msg['TEXT_REPLACE_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#replacing-substrings';
Blockly.Msg['TEXT_REPLACE_MESSAGE0'] = 'αντικατάσταση %1 με %2 στο %3';
Blockly.Msg['TEXT_REPLACE_TOOLTIP'] =
  'Αντικαθιστά όλες τις εμφανίσεις κάποιου κειμένου μέσα σε κάποιο άλλο κείμενο.';
Blockly.Msg['TEXT_REVERSE_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#reversing-text';
Blockly.Msg['TEXT_REVERSE_MESSAGE0'] = 'αντιστροφή %1';
Blockly.Msg['TEXT_REVERSE_TOOLTIP'] =
  'Αντιστροφή της σειράς των χαρακτήρων στο κείμενο.';
Blockly.Msg['TEXT_TEXT_HELPURL'] =
  'https://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.Msg['TEXT_TEXT_TOOLTIP'] = 'Ένα γράμμα, λέξη ή γραμμή κειμένου.';
Blockly.Msg['TEXT_TRIM_HELPURL'] =
  'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
Blockly.Msg['TEXT_TRIM_OPERATOR_BOTH'] =
  'περικοπή κενών διαστημάτων και από τις δύο πλευρές του';
Blockly.Msg['TEXT_TRIM_OPERATOR_LEFT'] =
  'περικοπή κενών διαστημάτων από την αριστερή πλευρά του';
Blockly.Msg['TEXT_TRIM_OPERATOR_RIGHT'] =
  'περικοπή κενών διαστημάτων από τη δεξιά πλευρά του';
Blockly.Msg['TEXT_TRIM_TOOLTIP'] =
  'Επιστρέφει ένα αντίγραφο του κειμένου με τα κενά διαστήματα αφαιρεμένα από τη μία ή και από τις δύο άκρες.';
Blockly.Msg['TO_INT'] = 'Ακέραιο μέρος του %1';
Blockly.Msg['TO_INT_HELPURL'] =
  'https://en.wikipedia.org/wiki/Integer_(computer_science)';
Blockly.Msg['TO_INT_TOOLTIP'] = 'Επιστρέφει το ακέραιο μέρος του αριθμού.';
Blockly.Msg['TO_LOWER'] = 'Μετατροπή του %1 σε πεζά';
Blockly.Msg['TO_LOWER_HELPURL'] = 'https://en.wikipedia.org/wiki/Letter_case';
Blockly.Msg['TO_LOWER_TOOLTIP'] = 'Επιστρέφει το κείμενο σε πεζά.';
Blockly.Msg['TO_UPPER'] = 'Μετατροπή του %1 σε κεφαλαία';
Blockly.Msg['TO_UPPER_HELPURL'] = 'https://en.wikipedia.org/wiki/Letter_case';
Blockly.Msg['TO_UPPER_TOOLTIP'] = 'Επιστρέφει το κείμενο σε κεφαλαία.';
Blockly.Msg['TODAY'] = 'Σήμερα';
Blockly.Msg['UNDO'] = 'Αναίρεση';
Blockly.Msg['UNNAMED_KEY'] = 'ανώνυμο';
Blockly.Msg['VAR_CREATE_WITH'] = 'πολλαπλές μεταβλητές';
Blockly.Msg['VAR_CREATE_WITH_TOOLTIP'] = 'Προσθήκη μεταβλητής';
Blockly.Msg['VAR_CREATE_EMPTY_TITLE'] = 'Δημιουργία μεταβλητής';
Blockly.Msg['VAR_CREATE_WITH_HELPURL'] = '';
Blockly.Msg['VARIABLES_DEFAULT_NAME'] = 'στοιχείο';
Blockly.Msg['VARIABLES_GET_CREATE_SET'] = "Δημιουργία 'ορισμός %1'";
Blockly.Msg['VARIABLES_GET_HELPURL'] =
  'https://github.com/google/blockly/wiki/Variables#get';
Blockly.Msg['VARIABLES_GET_TOOLTIP'] =
  'Επιστρέφει την τιμή αυτής της μεταβλητής.';
Blockly.Msg['VARIABLES_SET'] = 'Ορισμός %1 σε %2';
Blockly.Msg['VARIABLES_SET_CREATE_GET'] = "Δημιουργία 'λήψη %1'";
Blockly.Msg['VARIABLES_SET_HELPURL'] =
  'https://github.com/google/blockly/wiki/Variables#set';
Blockly.Msg['VARIABLES_SET_TOOLTIP'] =
  'Ορίζει αυτή τη μεταβλητή να είναι ίση με την είσοδο.';
Blockly.Msg['VARIABLE_ALREADY_EXISTS'] =
  "Μια μεταβλητή με το όνομα '%1' υπάρχει ήδη.";
Blockly.Msg['VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE'] =
  "Μια μεταβλητή με το όνομα '%1' υπάρχει ήδη για άλλο τύπο: '%2'.";
Blockly.Msg['WORKSPACE_ARIA_LABEL'] = 'Χώρος εργασίας Blockly';
Blockly.Msg['WORKSPACE_COMMENT_DEFAULT_TEXT'] = 'Πες κάτι...';
Blockly.Msg['CONTROLS_FOREACH_INPUT_DO'] =
  Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_FOR_INPUT_DO'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_IF_ELSEIF_TITLE_ELSEIF'] =
  Blockly.Msg['CONTROLS_IF_MSG_ELSEIF'];
Blockly.Msg['CONTROLS_IF_ELSE_TITLE_ELSE'] =
  Blockly.Msg['CONTROLS_IF_MSG_ELSE'];
Blockly.Msg['CONTROLS_IF_IF_TITLE_IF'] = Blockly.Msg['CONTROLS_IF_MSG_IF'];
Blockly.Msg['CONTROLS_IF_MSG_THEN'] = Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['CONTROLS_WHILEUNTIL_INPUT_DO'] =
  Blockly.Msg['CONTROLS_REPEAT_INPUT_DO'];
Blockly.Msg['LISTS_CREATE_WITH_ITEM_TITLE'] =
  Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['LISTS_GET_INDEX_HELPURL'] = Blockly.Msg['LISTS_INDEX_OF_HELPURL'];
Blockly.Msg['LISTS_GET_INDEX_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_GET_SUBLIST_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_INDEX_OF_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['LISTS_SET_INDEX_INPUT_IN_LIST'] = Blockly.Msg['LISTS_INLIST'];
Blockly.Msg['MATH_CHANGE_TITLE_ITEM'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['PROCEDURES_DEFRETURN_COMMENT'] =
  Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT'];
Blockly.Msg['PROCEDURES_DEFRETURN_DO'] =
  Blockly.Msg['PROCEDURES_DEFNORETURN_DO'];
Blockly.Msg['PROCEDURES_DEFRETURN_PROCEDURE'] =
  Blockly.Msg['PROCEDURES_DEFNORETURN_PROCEDURE'];
Blockly.Msg['PROCEDURES_DEFRETURN_TITLE'] =
  Blockly.Msg['PROCEDURES_DEFNORETURN_TITLE'];
Blockly.Msg['TEXT_APPEND_VARIABLE'] = Blockly.Msg['VARIABLES_DEFAULT_NAME'];
Blockly.Msg['TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'] =
  Blockly.Msg['VARIABLES_DEFAULT_NAME'];

Blockly.Msg['REGANYONE'] = 'Αντιστοίχιση οποιουδήποτε από τους χαρακτήρες %1';
Blockly.Msg['REGANYONE_NOT'] = 'Όχι %2';
Blockly.Msg['REGANYONE_TOOLTIP'] =
  'Αντιστοίχιση οποιουδήποτε από τους καθορισμένους χαρακτήρες';
Blockly.Msg['REGANYONE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGCAPTURINGGROUP'] = 'Ομαδοποίηση του μοτίβου %1\n';
Blockly.Msg['REGCAPTURINGGROUP_TOOLTIP'] = 'Ορισμός μιας ομάδας μοτίβων';
Blockly.Msg['REGCAPTURINGGROUP_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGCOMMON'] = 'Κοινά μοτίβα';
Blockly.Msg['REGCOMMON_MATCH'] = 'Αντιστοίχιση %1';
Blockly.Msg['REGCOMMON_TOOLTIP'] = 'Κοινές αναζητήσεις κανονικών εκφράσεων';
Blockly.Msg['REGCOMMON_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGEND'] = 'Οι γραμμές τελειώνουν με \n';
Blockly.Msg['REGEND_TOOLTIP'] = 'Τέλος γραμμής';
Blockly.Msg['REGEND_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGFOR'] =
  'Αντιστοίχιση του μοτίβου Από %1\n Έως %2 φορές Ή Έως το άπειρο %3\n';
Blockly.Msg['REGFOR_1'] = '%1';
Blockly.Msg['REGFOR_TOOLTIP'] = 'Περισσότερες από μία αντιστοιχίες μοτίβων.';
Blockly.Msg['REGFOR_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGLOOKAHEAD'] = 'Μοτίβο %1 ακολουθούμενο από %2';
Blockly.Msg['REGLOOKAHEAD_TOOLTIP'] =
  'Αντιστοίχιση μοτίβου που ακολουθεί ή δεν ακολουθεί άλλο μοτίβο';
Blockly.Msg['REGLOOKAHEAD_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGNEGATION'] = 'Αρνητικό μοτίβο %1\n';
Blockly.Msg['REGNEGATION_TOOLTIP'] =
  'Εύρεση της αρνητικής αντιστοίχισης του μοτίβου';
Blockly.Msg['REGNEGATION_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGOUTPUT'] = 'Τοποθέτηση κανονικής έκφρασης';
Blockly.Msg['REGOUTPUT_1'] = '%1';
Blockly.Msg['REGOUTPUT_TOOLTIP'] = 'Εισαγωγή της κανονικής έκφρασής σας εδώ.';
Blockly.Msg['REGOUTPUT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGPATTERN'] = 'Μοτίβο %1';
Blockly.Msg['REGPATTERN_TOOLTIP'] = 'Ορισμός ενός μοτίβου αναζήτησης';
Blockly.Msg['REGPATTERN_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGQUANT'] = 'Έλεγχος της συχνότητας του μοτίβου \n';
Blockly.Msg['REGQUANT_1'] = '%1';
Blockly.Msg['REGQUANT_PATTERN'] = 'μοτίβο %1';
Blockly.Msg['REGQUANT_TOOLTIP'] = 'Ποσοτικοποιητές μοτίβων';
Blockly.Msg['REGQUANT_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGRANGE'] = 'Αντιστοίχιση εύρους %1';
Blockly.Msg['REGRANGE_NOT'] = 'Όχι %1';
Blockly.Msg['REGRANGE_TOOLTIP'] =
  'Αντιστοίχιση στο αρχείο του καθορισμένου εύρους χαρακτήρων';
Blockly.Msg['REGRANGE_HELPURL'] = 'https://www.google.com/';
Blockly.Msg['REGSTART'] = 'Οι γραμμές ξεκινούν με\n';
Blockly.Msg['REGSTART_TOOLTIP'] = 'Έναρξη γραμμής';
Blockly.Msg['REGSTART_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['SAVE'] = 'Αποθήκευση αποτελέσματος στο %1';
Blockly.Msg['SAVE_TOOLTIP'] =
  'Αποθηκεύει ένα αρχείο με το καθορισμένο όνομα και επέκταση και αντικαθιστά αν υπάρχει ήδη';
Blockly.Msg['SAVE_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['SED'] = 'Αναζήτηση και αντικατάσταση σε ένα αρχείο\n';
Blockly.Msg['SED_REGEX'] = 'Kανονική έκφραση %1\n';
Blockly.Msg['SED_PATTERN'] = 'Μοτίβο αναζήτησης %1\n';
Blockly.Msg['SED_STRING'] = 'ή απλή συμβολοσειρά %1\n';
Blockly.Msg['SED_TEXT'] = 'Κείμενο προς αλλαγή %1\n';
Blockly.Msg['SED_INALL'] = 'Σε όλες τις εμφανίσεις του μοτίβου %1';
Blockly.Msg['SED_TOOLTIP'] = 'Ροή επεξεργασίας σε ένα αρχείο';
Blockly.Msg['SED_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['SHOWUNIQS'] = 'Εμφάνιση μόνο των μοναδικών γραμμών στο αρχείο\n';
Blockly.Msg['SHOWUNIQS_TOOLTIP'] =
  'Εύρεση και εμφάνιση μόνο των μοναδικών γραμμών σε ένα αρχείο';
Blockly.Msg['SHOWUNIQS_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['SORT'] = 'Ταξινόμηση αρχείου';
Blockly.Msg['SORT_DESC'] = 'Φθίνουσα σειρά %1';
Blockly.Msg['SORT_BASED'] = 'Με βάση %1';
Blockly.Msg['SORT_DELIM'] = 'Διαχωριστικό %1';
Blockly.Msg['SORT_COLS'] = 'Στήλη για ταξινόμηση %1';
Blockly.Msg['SORT_UNIQ'] = 'Έξοδος μοναδικών στοιχείων %1';
Blockly.Msg['SORT_IGNORE'] = 'Αγνόηση μη εκτυπώσιμων χαρακτήρων %1';
Blockly.Msg['SORT_IGNORE_LEADING_BLANKS'] = 'Αγνόηση κενών στην αρχή %1';
Blockly.Msg['SORT_TOOLTIP'] =
  'Αναφορά ή φιλτράρισμα επαναλαμβανόμενων γραμμών σε ένα αρχείο';
Blockly.Msg['SORT_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['TAIL'] = 'Τελευταία στοιχεία';
Blockly.Msg['TAIL_METRIC'] = 'Μετρική %1';
Blockly.Msg['TAIL_NUMBER_OF'] = 'Αριθμός %1';
Blockly.Msg['TAIL_DESC'] = 'Φθίνουσα σειρά %1';
Blockly.Msg['TAIL_TOOLTIP'] = 'Εμφάνιση του τελευταίου μέρους των αρχείων';
Blockly.Msg['TAIL_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['TEE'] = 'Αποθήκευση σε αρχείο &\n και συνέχιση επεξεργασίας\n';
Blockly.Msg['TEE_APPEND'] = 'Προσθήκη στο αρχείο %1\n';
Blockly.Msg['TEE_NAME'] = 'Όνομα αρχείου %1';
Blockly.Msg['TEE_TOOLTIP'] =
  'Το εργαλείο tee αντιγράφει την τυπική είσοδο στην τυπική έξοδο, κάνοντας ένα αντίγραφο σε ένα ή περισσότερα αρχεία.';
Blockly.Msg['TEE_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['TOUCH'] = 'Τροποποίηση χρονικών στιγμών αρχείου %1\n';
Blockly.Msg['TOUCH_NOT_CREATE_FILE'] =
  'Μη δημιουργία αρχείου αν δεν υπάρχει %1 \n';
Blockly.Msg['TOUCH_CHANGE_ACCESS_TIME'] =
  'Αλλαγή της χρονικής σήμανσης πρόσβασης στην τρέχουσα ώρα %1 \n';
Blockly.Msg['TOUCH_CHANGE_MODIFICATION_TIME'] =
  'Αλλαγή της χρονικής σήμανσης τροποποίησης στην τρέχουσα ώρα %1 \n';
Blockly.Msg['TOUCH_SPECIFY_TIME_D'] =
  'Αλλαγή χρόνου πρόσβασης και τελευταίας τροποποίησης \n';
Blockly.Msg['TOUCH_SPECIFY_TIME_FORMAT_D'] =
  'Προσθήκη ημερομηνίας στη μορφή YYYY-MM-DD hh:mm:SS[Z (για UTC)] %1';
Blockly.Msg['TOUCH_TOOLTIP'] =
  'Ορίστε την ημερομηνία και ώρα πρόσβασης και τροποποίησης ενός αρχείου. Για εισαγωγή χρονικής στιγμής μπορείτε να χρησιμοποιήσετε τη μορφή ISO 8601: YYYY-MM-DD hh:mm:SS[Z (για UTC)], όπου:' +
  '\n- YYYY: Το έτος (π.χ., 2024)' +
  '\n- MM: Ο αριθμός του μήνα (01-12)' +
  '\n- DD: Η ημέρα του μήνα (01-31)' +
  '\n- T: Ο διαχωριστής μεταξύ ημερομηνίας και ώρας' +
  '\n- hh: Η ώρα (00-23)' +
  '\n- mm: Τα λεπτά (00-59)' +
  '\n- SS: Τα δευτερόλεπτα (00-59)' +
  '\n- Z: Αντιπροσωπεύει το συντονισμένο παγκόσμιο χρόνο (UTC, προαιρετικό).' +
  '\nΠαράδειγμα: Για 12 Ιανουαρίου 2024, ώρα 14:30 UTC, η μορφή θα είναι: 2024-01-12T14:30:00Z';
Blockly.Msg['TOUCH_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['UNIQ'] = 'Αναγνώριση διπλότυπων γραμμών στο αρχείο\n';
Blockly.Msg['UNIQ_COUNT'] =
  'Μέτρηση των εμφανίσεων των \n γραμμών που αφαιρέθηκαν %1';
Blockly.Msg['UNIQ_CASE'] = ' Χωρίς διάκριση πεζών-κεφαλαίων %1';
Blockly.Msg['UNIQ_OUTPUT_NON_REPEATED_LINES'] =
  'Έξοδος μόνο μη επαναλαμβανόμενων γραμμών %1';
Blockly.Msg['UNIQ_OUTPUT_SINGLE_COPY_OF_REPEATED_LINES'] =
  'Έξοδος μόνο ενός αντίγραφου των επαναλαμβανόμενων γραμμών %1';
Blockly.Msg['UNIQ_SKIP_CHARS'] =
  'Παράλειψη των πρώτων %1 χαρακτήρων κάθε γραμμής';
Blockly.Msg['UNIQ_TOOLTIP'] =
  'Αναφορά ή φιλτράρισμα επαναλαμβανόμενων γραμμών σε ένα αρχείο';
Blockly.Msg['UNIQ_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['WC'] = 'Μέτρηση στο αρχείο';
Blockly.Msg['WC_LINES'] = 'Μέτρηση γραμμών %1';
Blockly.Msg['WC_WORDS'] = 'Μέτρηση λέξεων %1';
Blockly.Msg['WC_BYTES'] = 'Μέτρηση byte %1';
Blockly.Msg['WC_CHARS'] = 'Μέτρηση χαρακτήρων %1';
Blockly.Msg['WC_TOOLTIP'] =
  'Μέτρηση λέξεων, γραμμών, χαρακτήρων και byte σε ένα αρχείο';
Blockly.Msg['WC_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['XARGS'] = 'Εκτέλεση της παρακάτω εντολής\n Για κάθε στοιχείο';
Blockly.Msg['XARGS_PLACEHOLDER'] =
  'χρησιμοποιήστε έναν σύμβολο κράτησης θέσης %1';
Blockly.Msg['XARGS_TOOLTIP'] =
  'Εκτέλεση της παρακάτω εντολής για κάθε στοιχείο μιας λίστας ή ενός αρχείου';
Blockly.Msg['XARGS_HELPURL'] = 'https://www.google.com/';

Blockly.Msg['MATH_HUE'] = '230';
Blockly.Msg['LOOPS_HUE'] = '120';
Blockly.Msg['LISTS_HUE'] = '260';
Blockly.Msg['LOGIC_HUE'] = '210';
Blockly.Msg['VARIABLES_HUE'] = '330';
Blockly.Msg['TEXTS_HUE'] = '160';
Blockly.Msg['PROCEDURES_HUE'] = '290';
Blockly.Msg['COLOUR_HUE'] = '20';
Blockly.Msg['VARIABLES_DYNAMIC_HUE'] = '310';
Blockly.Msg['CATVARIABLES'] = 'Μεταβλητές';

// df command
Blockly.Msg['DF'] = 'Χρήση χώρου δίσκου';
Blockly.Msg['DF_SHOW_FS_TYPE'] = 'Έξοδος τύπου συστήματος αρχείων %1';
Blockly.Msg['DF_SHOW_TOTAL_BLOCKS'] = 'Έξοδος συνολικού αριθμού blocks %1';
Blockly.Msg['DF_SHOW_USED_BLOCKS'] = 'Έξοδος  χρησιμοποιημένων blocks %1';
Blockly.Msg['DF_SHOW_AVAILABLE_BLOCKS'] = 'Έξοδος διαθέσιμων blocks %1';
Blockly.Msg['DF_TOOLTIP'] =
  'Εκτελεί την εντολή df για εμφάνιση πληροφοριών χρήσης χώρου δίσκου';
Blockly.Msg['DF_HELPURL'] = 'https://man7.org/linux/man-pages/man1/df.1.html';

// uptime command
Blockly.Msg['UPTIME'] = 'Χρόνος λειτουργίας συστήματος';
Blockly.Msg['UPTIME_PRETTY'] = 'Έξοδος χρόνου λειτουργίας σε όμορφη μορφή %1';
Blockly.Msg['UPTIME_SINCE'] =
  'Έξοδος του χρόνου λειτουργίας από την εκκίνηση %1';
Blockly.Msg['UPTIME_KERNEL_VERSION'] = 'Έξοδος της έκδοσης του πυρήνα %1';
Blockly.Msg['UPTIME_TOOLTIP'] =
  'Εμφανίζει τον χρόνο λειτουργίας του συστήματος, τον αριθμό των χρηστών και τους μέσους όρους φορτίου';
Blockly.Msg['UPTIME_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/uptime.1.html';

// who command
Blockly.Msg['WHO'] = 'Ποιοι χρήστες είναι συνδεδεμένοι';
Blockly.Msg['WHO_SHOW_HEADING'] = 'Έξοδος πληροφοριών κεφαλίδας %1';
Blockly.Msg['WHO_SHOW_ALL'] = 'Έξοδος όλων των πληροφοριών %1';
Blockly.Msg['WHO_SHOW_USERS'] = 'Έξοδος διεργασιών χρηστών %1';
Blockly.Msg['WHO_SHOW_BOOT_TIME'] = 'Έξοδος τελευταίου χρόνου εκκίνησης %1';
Blockly.Msg['WHO_SHOW_RUNLEVEL'] = 'Έξοδος του τρέχοντος runlevel %1';
Blockly.Msg['WHO_TOOLTIP'] =
  'Εμφανίζει ποιοι χρήστες είναι συνδεδεμένοι και σχετικές πληροφορίες συστήματος';
Blockly.Msg['WHO_HELPURL'] = 'https://man7.org/linux/man-pages/man1/who.1.html';

// hostname command
Blockly.Msg['SYSTEM_HOSTNAME_COMMAND'] = 'Όνομα του συστήματος';
Blockly.Msg['HOSTNAME_SHOW_HOSTNAME'] = 'Έξοδος του ονόματος του συστήματος %1';
Blockly.Msg['HOSTNAME_SET_HOSTNAME'] =
  'Ορισμός του ονόματος του συστήματος σε %1';
Blockly.Msg['HOSTNAME_SHOW_ALIASES'] =
  'Έξοδος ψευδωνύμων του ονόματος συστήματος %1';
Blockly.Msg['HOSTNAME_SHOW_IP'] =
  'Έξοδος της IP διεύθυνσης που συνδέεται με το όνομα συστήματος %1';
Blockly.Msg['HOSTNAME_SHOW_FQDN'] =
  'Έξοδος του πλήρως καταρτισμένου ονόματος τομέα (FQDN) %1';
Blockly.Msg['HOSTNAME_TOOLTIP'] =
  'Εμφανίζει ή ορίζει το όνομα του συστήματος και σχετικές πληροφορίες';
Blockly.Msg['HOSTNAME_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/hostname.1.html';

// date command
Blockly.Msg['SYSTEM_DATE_COMMAND'] = 'Τρέχουσα ημερομηνία και ώρα';
Blockly.Msg['DATE_UTC_TIME'] = 'Έξοδος ώρας σε UTC %1';
Blockly.Msg['DATE_TOOLTIP'] =
  'Εμφανίζει ή ορίζει την ημερομηνία και ώρα του συστήματος';
Blockly.Msg['DATE_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/date.1.html';

// kill command
Blockly.Msg['KILL'] = 'Τερματισμός διεργασίας';
Blockly.Msg['KILL_BLOCK'] = 'τερματισμός διεργασίας %1';
Blockly.Msg['KILL_TOOLTIP'] = 'Τερματισμός μιας διεργασίας με το PID της';
Blockly.Msg['KILL_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/kill.1.html';

// echo command
Blockly.Msg['ECHO'] = 'Εγγραφή στην έξοδο:';
Blockly.Msg['ECHO_TOOLTIP'] = 'Εγγραφή παραμέτρων στην τυπική έξοδο';
Blockly.Msg['ECHO_BLOCK'] = '%1';
Blockly.Msg['ECHO_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/echo.1.html';

// sleep command
Blockly.Msg['SLEEP'] = 'Αναμονή για διάρκεια';
Blockly.Msg['SLEEP_BLOCK'] = 'αναμονή για %1 δευτερόλεπτα';
Blockly.Msg['SLEEP_TOOLTIP'] = 'Παύση για καθορισμένο χρονικό διάστημα';
Blockly.Msg['SLEEP_HELPURL'] =
  'https://man7.org/linux/man-pages/man1/sleep.1.html';

// ps command
Blockly.Msg['PS'] = 'Κατάσταση διεργασίας';
Blockly.Msg['PS_SHOW_ALL'] = 'Έξοδος όλων των διεργασιών %1';
Blockly.Msg['PS_SHOW_USER'] = 'Έξοδος διεργασιών για χρήστη %1';
Blockly.Msg['PS_SHOW_PID'] = 'Έξοδος διεργασίας με PID %1';
Blockly.Msg['PS_FORMAT'] = 'Μορφή εξόδου %1';
Blockly.Msg['PS_SHOW_THREAD'] = 'Έξοδος νημάτων %1';
Blockly.Msg['PS_TOOLTIP'] =
  'Εκτελεί την εντολή ps για εμφάνιση πληροφοριών διεργασίας';
Blockly.Msg['PS_HELPURL'] = 'https://man7.org/linux/man-pages/man1/ps.1.html';

// Ping command translations
Blockly.Msg['PING'] = 'Κάνε Ping στη διεύθυνση:';
Blockly.Msg['PING_COUNT'] = 'Αριθμός πακέτων για αποστολή';
Blockly.Msg['PING_INTERVAL'] =
  'Διάστημα χρόνου μεταξύ κάθε πακέτου (σε δευτερόλεπτα)';
Blockly.Msg['PING_TIMEOUT'] =
  'Χρονικό όριο αναμονής για κάθε απόκριση πακέτου (σε δευτερόλεπτα)';

// ssh command
Blockly.Msg['SSH'] = 'Δημιουργία σύνδεσης SSH';
Blockly.Msg['SSH_USER'] = 'Καθορίστε το όνομα χρήστη';
Blockly.Msg['SSH_HOST'] = 'Καθορίστε τη διεύθυνση του απομακρυσμένου host';
Blockly.Msg['SSH_KEY'] = 'Αρχείο Ιδιωτικού Κλειδιού';
Blockly.Msg['SSH_PORT'] = 'Ορίστε τον αριθμό της θύρας';

// Curl command
Blockly.Msg['CURL'] = 'Εκτελέστε ένα αίτημα HTTP σε';
Blockly.Msg['CURL_METHOD'] = 'Επιλέξτε μέθοδο';
Blockly.Msg['CURL_HEADER'] = 'Παρέχετε προσαρμοσμένες κεφαλίδες για το αίτημα';
Blockly.Msg['CURL_REDIRECTS'] = 'Ακολούθηση ανακατευθύνσεων';

Blockly.Msg['ARGUMENTS_CREATE_WITH'] = 'Εισαγωγή ορισμάτων';
Blockly.Msg['ARGUMENTS_CREATE_WITH_TOOLTIP'] =
  'Προσθέστε επιχειρήματα για τη συνάρτηση.';
Blockly.Msg['ARGUMENTS_CREATE_WITH_HELPURL'] =
  'https://example.com/help/arguments_create_with';
Blockly.Msg['ARGUMENTS_CREATE_EMPTY_TITLE'] = 'Χωρίς εισαγωγές';

// ARGUMENTS_CREATE_WITH command
Blockly.Msg['ARGUMENTS_CREATE_WITH'] = 'Εισαγωγή ορισμάτων';
Blockly.Msg['ARGUMENTS_CREATE_WITH_TOOLTIP'] =
  'Προσθέστε επιχειρήματα για τη συνάρτηση.';
Blockly.Msg['ARGUMENTS_CREATE_WITH_HELPURL'] =
  'https://example.com/help/arguments_create_with';
Blockly.Msg['ARGUMENTS_CREATE_EMPTY_TITLE'] = 'Χωρίς εισαγωγές';

// ARGUMENT command
Blockly.Msg['ARGUMENT'] = 'Όρισμα';
Blockly.Msg['ARGUMENT_TOOLTIP'] = 'Εισάγετε ένα όρισμα για τη συνάρτηση.';
Blockly.Msg['ARGUMENT_HELPURL'] = 'https://example.com/help/argument';
Blockly.Msg['ARGUMENT_DEFAULT_TEXT'] = 'προεπιλεγμένο_όρισμα';

// BACKREFERENCE command
Blockly.Msg['REGBACKREFERENCE'] = 'Αναφορά σε ομάδα %1';
Blockly.Msg['REGBACKREFERENCE_TOOLTIP'] =
  'Αναφέρεται σε μια προηγουμένως αντιστοιχισμένη ομάδα χρησιμοποιώντας \\1, \\2, κλπ.';
Blockly.Msg['REGBACKREFERENCE_HELPURL'] =
  'https://developer.mozilla.org/el/docs/Web/JavaScript/Guide/Regular_Expressions';

// ALTERNATION command
Blockly.Msg['REGALTERNATION'] = 'Λογικό ή';
Blockly.Msg['REGALTERNATION_TOOLTIP'] =
  'Ταιριάζει είτε με το πρότυπο στα αριστερά είτε με το πρότυπο στα δεξιά. Χρησιμοποιήστε | για λογικό "ή".';
Blockly.Msg['REGALTERNATION_HELPURL'] =
  'https://developer.mozilla.org/el/docs/Web/JavaScript/Guide/Regular_Expressions#logical_or';

/* Git Commands */

// git add command
Blockly.Msg['GIT_ADD_0'] =
  'Προσθήκη αρχείου(ων) στο staging: %1 για να συμπεριληφθούν στο επόμενο commit';
Blockly.Msg['GIT_ADD_1'] =
  'Μόνο όταν γίνεται staging συγκεκριμένου αρχείου: Καθορίστε διαδρομή αρχείου: %1';
Blockly.Msg['GIT_ADD_TOOLTIP'] =
  'Προσθέτει αλλαγές για το επόμενο commit. Χρησιμοποιήστε "." για να προσθέσετε όλα τα αρχεία ή καθορίστε διαδρομή για συγκεκριμένο αρχείο.';
Blockly.Msg['GIT_ADD_HELPURL'] = 'https://git-scm.com/docs/git-add';

// git branch command
Blockly.Msg['GIT_BRANCH'] = 'Δημιουργία νέου branch Git: %1';
Blockly.Msg['GIT_BRANCH_TOOLTIP'] =
  'Δημιουργεί νέο branch με το καθορισμένο όνομα χρησιμοποιώντας "git branch".';
Blockly.Msg['GIT_BRANCH_HELPURL'] = 'https://git-scm.com/docs/git-branch';

// git checkout command
Blockly.Msg['GIT_CHECKOUT'] = 'Εναλλαγή σε branch με όνομα: %1';
Blockly.Msg['GIT_CHECKOUT_TOOLTIP'] = 'Μεταβαίνει στο καθορισμένο branch';
Blockly.Msg['GIT_CHECKOUT_HELPURL'] = 'https://git-scm.com/docs/git-checkout';

// git clean command
Blockly.Msg['GIT_CLEAN'] =
  'Αφαίρεση μη παρακολουθούμενων αρχείων/φακέλων με επιλογές: %1';
Blockly.Msg['GIT_CLEAN_TOOLTIP'] =
  'Καθαρίζει τον κατάλογο εργασίας αφαιρώντας μη παρακολουθούμενα αρχεία ή φακέλους. Επιλέξτε την κατάλληλη επιλογή.';
Blockly.Msg['GIT_CLEAN_HELPURL'] = 'https://git-scm.com/docs/git-clean';

// git clone command
Blockly.Msg['GIT_CLONE'] = 'Κλωνοποίηση αποθετηρίου από URL: %1';
Blockly.Msg['GIT_CLONE_TOOLTIP'] =
  'Κλωνοποιεί υπάρχον αποθετήριο Git από απομακρυσμένο URL';
Blockly.Msg['GIT_CLONE_HELPURL'] = 'https://git-scm.com/docs/git-clone';

// git commit command
Blockly.Msg['GIT_COMMIT'] = 'Commit των αλλαγών με μήνυμα: %1';
Blockly.Msg['GIT_COMMIT_TOOLTIP'] =
  'Κάνει commit τις αλλαγές που έχουν προστεθεί στο staging με το καθορισμένο μήνυμα';
Blockly.Msg['GIT_COMMIT_HELPURL'] = 'https://git-scm.com/docs/git-commit';

// git diff command
Blockly.Msg['GIT_DIFF'] =
  'Εμφανίζει τις αλλαγές που έγιναν στον κατάλογο εργασίας\n Σε σύγκριση με το index ή το τελευταίο commit';
Blockly.Msg['GIT_DIFF_TOOLTIP'] =
  'Εμφανίζει τις διαφορές μεταξύ του καταλόγου εργασίας και του index ή του τελευταίου commit.';
Blockly.Msg['GIT_DIFF_HELPURL'] = 'https://git-scm.com/docs/git-diff';

// git fetch command
Blockly.Msg['GIT_FETCH'] = 'Λήψη αλλαγών από απομακρυσμένο: %1';
Blockly.Msg['GIT_FETCH_TOOLTIP'] =
  'Λαμβάνει αλλαγές από το καθορισμένο απομακρυσμένο αποθετήριο χωρίς να τις συγχωνεύει';
Blockly.Msg['GIT_FETCH_HELPURL'] = 'https://git-scm.com/docs/git-fetch';

// git init command
Blockly.Msg['GIT_INIT'] = 'Αρχικοποίηση νέου αποθετηρίου git';
Blockly.Msg['GIT_INIT_TOOLTIP'] =
  'Αρχικοποιεί νέο αποθετήριο Git στον τρέχοντα κατάλογο';
Blockly.Msg['GIT_INIT_HELPURL'] = 'https://git-scm.com/docs/git-init';

// git log command
Blockly.Msg['GIT_LOG_0'] = 'Εμφάνιση ιστορικού commits';
Blockly.Msg['GIT_LOG_1'] = 'Εμφάνιση μιας γραμμής για κάθε commit: %1';
Blockly.Msg['GIT_LOG_2'] = 'Εμφάνιση σύνοψης αλλαγών: %1';
Blockly.Msg['GIT_LOG_3'] = 'Εμφάνιση ιστορικού commits ως γράφημα: %1';
Blockly.Msg['GIT_LOG_TOOLTIP'] =
  'Εμφανίζει το ιστορικό των commits του αποθετηρίου';
Blockly.Msg['GIT_LOG_HELPURL'] = 'https://git-scm.com/docs/git-log';

// git merge command
Blockly.Msg['GIT_MERGE'] = 'Συγχώνευση branch %1 στο τρέχον branch';
Blockly.Msg['GIT_MERGE_TOOLTIP'] =
  'Συγχωνεύει το καθορισμένο branch στο τρέχον branch';
Blockly.Msg['GIT_MERGE_HELPURL'] = 'https://git-scm.com/docs/git-merge';

// git pull command
Blockly.Msg['GIT_PULL'] =
  'Λήψη των τελευταίων αλλαγών από το απομακρυσμένο repo: %1 από το branch: %2';
Blockly.Msg['GIT_PULL_TOOLTIP'] =
  'Λαμβάνει και συγχωνεύει αλλαγές από το καθορισμένο απομακρυσμένο και branch';
Blockly.Msg['GIT_PULL_HELPURL'] = 'https://git-scm.com/docs/git-pull';

// git push command
Blockly.Msg['GIT_PUSH'] =
  'Αποστολή τοπικών commits στο απομακρυσμένο %1 στο branch %2';
Blockly.Msg['GIT_PUSH_TOOLTIP'] =
  'Στέλνει τα τοπικά commits στο καθορισμένο απομακρυσμένο και branch';
Blockly.Msg['GIT_PUSH_HELPURL'] = 'https://git-scm.com/docs/git-push';

// git remote command
Blockly.Msg['GIT_REMOTE'] = 'Εμφάνιση των URLs των απομακρυσμένων';
Blockly.Msg['GIT_REMOTE_TOOLTIP'] =
  'Εμφανίζει τα URLs των απομακρυσμένων για το αποθετήριο Git';
Blockly.Msg['GIT_REMOTE_HELPURL'] = 'https://git-scm.com/docs/git-remote';

// git reset command
Blockly.Msg['GIT_RESET'] =
  'Αφαίρεση από staging ή επαναφορά σε προηγούμενο commit με: %1';
Blockly.Msg['GIT_RESET_TOOLTIP'] =
  'Αφαιρεί αρχεία από το staging ή μετακινεί το HEAD σε προηγούμενο commit';
Blockly.Msg['GIT_RESET_HELPURL'] = 'https://git-scm.com/docs/git-reset';

// git restore command
Blockly.Msg['GIT_RESTORE'] = 'Επαναφορά αρχείου από το αποθετήριο %1';
Blockly.Msg['GIT_RESTORE_TOOLTIP'] =
  'Επαναφέρει αρχείο από το πιο πρόσφατο commit.';
Blockly.Msg['GIT_RESTORE_HELPURL'] = 'https://git-scm.com/docs/git-restore';

// git set config command
Blockly.Msg['GIT_SET_CONFIG'] = 'Ορισμός ρύθμισης %1 σε %2';
Blockly.Msg['GIT_SET_CONFIG_TOOLTIP'] =
  'Ορίζει μια ρύθμιση Git (π.χ. όνομα χρήστη, email)';
Blockly.Msg['GIT_SET_CONFIG_HELPURL'] = 'https://git-scm.com/docs/git-config';

// git show command
Blockly.Msg['GIT_SHOW'] = 'Εμφάνιση λεπτομερειών commit: %1';
Blockly.Msg['GIT_SHOW_TOOLTIP'] =
  'Εμφανίζει λεπτομέρειες συγκεκριμένου commit (hash, αλλαγές, κ.λπ.).';
Blockly.Msg['GIT_SHOW_HELPURL'] = 'https://git-scm.com/docs/git-show';

// git stash command
Blockly.Msg['GIT_STASH'] = 'Προσωρινή αποθήκευση τοπικών αλλαγών';
Blockly.Msg['GIT_STASH_TOOLTIP'] =
  'Αποθηκεύει προσωρινά τις μη καταχωρημένες αλλαγές και επαναφέρει τον κατάλογο εργασίας στην κατάσταση του HEAD commit.';
Blockly.Msg['GIT_STASH_HELPURL'] = 'https://git-scm.com/docs/git-stash';

// git stash pop command
Blockly.Msg['GIT_STASH_POP'] =
  'Εφαρμογή της πιο πρόσφατης προσωρινής αποθήκευσης και αφαίρεσή της από τη λίστα';
Blockly.Msg['GIT_STASH_POP_TOOLTIP'] =
  'Εφαρμόζει την πιο πρόσφατη προσωρινή αποθήκευση (επαναφέρει τις αλλαγές) και την αφαιρεί από τη λίστα.';
Blockly.Msg['GIT_STASH_POP_HELPURL'] = 'https://git-scm.com/docs/git-stash';

// git status command
Blockly.Msg['GIT_STATUS'] = 'Έλεγχος κατάστασης του τρέχοντος αποθετηρίου git';
Blockly.Msg['GIT_STATUS_TOOLTIP'] =
  'Εμφανίζει την κατάσταση του καταλόγου εργασίας και του staging area';
Blockly.Msg['GIT_STATUS_HELPURL'] = 'https://git-scm.com/docs/git-status';

// git tag command
Blockly.Msg['GIT_TAG'] = 'Δημιουργία tag: %1';
Blockly.Msg['GIT_TAG_TOOLTIP'] =
  'Δημιουργεί tag στο τρέχον commit, συνήθως για σημείωση έκδοσης.';
Blockly.Msg['GIT_TAG_HELPURL'] = 'https://git-scm.com/docs/git-tag';

// git view config command
Blockly.Msg['GIT_VIEW_CONFIG'] = 'Εμφάνιση των ρυθμίσεων Git %1';
Blockly.Msg['GIT_VIEW_CONFIG_TOOLTIP'] =
  'Εμφανίζει όλες τις ρυθμίσεις git (π.χ. όνομα χρήστη, email, προεπιλεγμένο branch, κ.λπ.)';
Blockly.Msg['GIT_VIEW_CONFIG_HELPURL'] = 'https://git-scm.com/docs/git-config';
