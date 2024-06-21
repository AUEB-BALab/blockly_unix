# Visual development of data processing pipelines using Blockly

This is a development environment based on **Blockly** where users can easily construct data processing pipelines
by visually plugging together processing blocks. The pipeline will be implemented underneath using Unix tools.
![Picture2](https://github.com/vcipi/blockly_unix/assets/108274884/8bb6be00-a88b-4145-bb61-8be70e9b5c58)

# Summary

The purpose of this project is to present a unique framework that makes use of Blockly, a visual programming language, to represent Unix commands as graphical blocks and to convey their abstractions. Through simplifying the way of their operation and the elimination of the requirement for specialist programming expertise, this method intends to make Unix utilities more accessible to a wider audience.The thesis provides an explanation of the development of a visual programming interface that simplifies the utilization of Unix command-line tools by allowing users to design data processing pipelines by dragging and dropping components. Visual blocks are connected to Unix instructions through the use of JSON specification files, which are utilized by the system in order to facilitate the conversion process.

The user-friendliness of data processing activities is improved as a result of this deliberate design choice, and users are encouraged to develop a deeper understanding of Unix commands. Increasing the accessibility of complex data manipulation is one of the goals of this initiative, which also aims to encourage more people to participate in computational data analysis.The findings of the project underline the significance of visual programming in the process of combining complex command-line activities with user-friendly interfaces. This, in turn, broadens the range of tools that are available to data scientists and researchers working in a variety of fields. This research not only makes a contribution to the field of visual programming, but it also opens up new possibilities for instructional tools that facilitate the acquisition of command-line interfaces using approaches that are both interactive and interesting.

# Installation Instructions

1. Follow the instructions on how to download and install **Blockly** locally on your PC on the official **Blockly** repository : https://github.com/google/blockly
2. Clone this project into the **_demos_** directory of **Blockly** you installed

![Picture5](https://github.com/vcipi/blockly_unix/assets/108274884/53cfa7bf-2c1f-4ac4-a211-524376e28ebf)

4. Run the **_index.html_** file.

![Picture4](https://github.com/vcipi/blockly_unix/assets/108274884/9b70b5a0-c3f0-4973-9ed4-fbbe62479835)

5. Your browser should initiate the application so you can begin.

![Picture3](https://github.com/vcipi/blockly_unix/assets/108274884/67304620-7e13-4718-973e-55cf3f2e296c)

# Setting Up Pre-commit Hook

To ensure that code is properly formatted before committing, set up the pre-commit hook by following these steps :

1. Run the following command bellow the root directory :

   `printf '#!/bin/sh\nbin/pre-commit\n' > .git/hooks/pre-commit`

2. Make both scripts executable through this command :

   `chmod +x .git/hooks/pre-commit bin/pre-commit`

# Further information

The work behind this project is further documented in MSc theses by
[Klenti Cipi](http://www.pyxida.aueb.gr/index.php?op=view_object&object_id=11051) and
[Pantelis Kakavas](http://www.pyxida.aueb.gr/index.php?op=view_object&object_id=11053).
