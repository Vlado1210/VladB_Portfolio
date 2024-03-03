

export const data = [{
    "name": "Facemask detection using machine learning",
    "image" : "https://imgur.com/R6awI2c.png",
    "description":"Machine learning methods for image preprocessing implementation, such as K-Means and Random Forest, with the aim of developing a CNN that trains a model enabling real-time face mask detection.",
    "fullDescription":"The project aimed to address the issue of identifying mask usage in public spaces by leveraging cutting-edge topics in machine learning. \n\nThe first step was to delve into unsupervised learning models, exploring various theoretical frameworks. However, before implementation, extensive research was conducted to determine the most suitable method for our project. After thorough examination two methods were compared (k-means clustering and random forest classifier), this allowed us to create distinct, non-overlapping subgroups, aligning perfectly with the need to classify images into two exclusive categories 'with and without masks'. Upon comparing both implementations k-means yielded better results, leading us to continue with it for the project.\n\nWith image preprocessing completed, the next step consisted in cretaing the model.Given the objective of object identification, a Convolutional Neural Network (CNN) was deemed most suitable, falling under supervised learning. Utilizing TensorFlows guidance, experimenting with various layers to optimize performance through a blend of research and trial-and-error.\n\nThe result was a model capable of real-time face mask detection via webcam feed with more than 85% accuracy",
    "date":"2023/01/20",
    "category":"AI",
    "detailedImage":"https://imgur.com/R6awI2c.png",
    "languages": ["Python", "TensorFlow"],
    "gtihub":"https://github.com/Vlado1210/MLProyect"
},{
    "name": "Auto DTP Generator",
    "image" : "https://imgur.com/9qcMzIY.png",
    "description":"Automated tool using an Open AI API  for design thinking process artifacts generation. Enhances efficiency by streamlining repetitive tasks.",
    "fullDescription":"Developing a tool to automate the design thinking process, focusing on minimizing the time and effort required for artifact creation. This is done by using the OpenAI API, Lang chain and different python libraries to visualize the information more graphically with the objective of expediting tasks involved in application design. \n\nWhile initial progress includes implementing 6 prompts yielding artifacts such as persona profiles, journey maps, competitor analyses, proyect planning, empathy maps and style guides, the ultimate goal is to deliver a fully functional web application with more than 30 artifacts. This webapp also has the feature to customize your results and adapt them to different types of projects or project management methodologies.",
    "date":"2023/08/18",
    "category":"AI",
    "detailedImage":"https://imgur.com/xxJMM02.png",
    "languages": ["Python", "CSS"],
    "github":"https://github.com/Vlado1210/AutoDTPGenerator_Prototype"
},{
    "name": "ODI-SEA",
    "image" : "https://imgur.com/pxIjoXM.png",
    "description":"ODI-SEA is a C# side-scrolling tiled-based game developed in Visual Studio. Set in the ocean depths, players control an octopus tasked with collecting 10 gems within a time limit while dodging obstacles to survive.",
    "fullDescription":"ODI-SEA is an engaging side-scrolling tiled-based game crafted using C# and Visual Studio. Plunge into the depths of the ocean as you take control of an adventurous octopus on a mission to collect 10 precious gems before time runs out. The game's immersive background features a captivating parallax effect, enhancing the underwater ambiance. \n\nAs players navigate through the aquatic environment, they must skillfully maneuver the octopus to avoid various obstacles lurking in its path. Colliding with obstacles results in losing a life, adding a thrilling element of challenge to the gameplay. With a limited number of lives, strategic decision-making is crucial to success. \n\nThe tiled-based design ensures interaction within the game environment, offering a seamless and enjoyable experience for players of all ages.",
    "date":"2023/04/15",
    "category":"Videogames",
    "detailedImage":"https://imgur.com/NdDpW4p.mp4",
    "languages": ["C#"],
    "github":"https://github.com/Vlado1210/Odi-sea"
},{
    "name": "3D object reader",
    "image" : "https://imgur.com/7Md6Drn.png",
    "description":"C# OBJ Reader in Visual Studio reads and manipulates 3D objects from OBJ files. Features include axis displacement, resizing, and canvas movement. Save and replay object movements for dynamic animations",
    "fullDescription":"Developed in C# within Visual Studio, the C# OBJ Reader is a versatile tool designed to read and interact with 3D objects from OBJ files, allowing users to manipulate 3D models with ease. \n\nOne of its key features is the ability to seamlessly read and display any type of OBJ file, allowing users to work with a wide range of 3D models. Once imported, users can manipulate these objects in various ways, including displacement along the X, Y, and Z axes, as well as resizing to adjust their scale. Additionally, the application enables users to move objects freely across the canvas, providing an interactive experience.  \n\nAnother key feature is its capability to record and save object movements. Users can capture their interactions with the 3D models, including changes in position, rotation, and scale, and save these movements for later playback, enabling users to create animations by replaying the recorded movements.",
    "date":"2023/05/30",
    "category":"Videogames",
    "detailedImage":"https://imgur.com/9vraDno.mp4",
    "languages": ["C#"],
    "github":"https://github.com/Vlado1210/OBJ-FILE-READER"
},{
    "name": "Multiplayer Pool Game",
    "image" : "https://imgur.com/slsS8Vv.png",
    "description":"Multiplayer Pool Game in Visual Studio offers realistic physics for ball interactions, including rebound off balls, cue, and table. Mouse-controlled cue for two players aiming to pocket their set of colored balls and the black one.",
    "fullDescription":"Crafted in C# within Visual Studio, the pool Game delivers an immersive billiards experience with realistic physics governing ball interactions. Designed for two players, this multiplayer game features intuitive mouse controls for cue manipulation, offering precise aiming and striking mechanics.\n\nPlayers are tasked with pocketing their set of colored balls—three each—alongside the black ball, employing strategic shots and precise cue ball control. The game's physics engine accurately simulates the rebound of balls against each other, the cue, and the table surface, adding depth and authenticity to gameplay. \n\nMoreover, the game's code architecture is designed with scalability in mind, allowing for easy customization and expansion. Developers can effortlessly increase the number of balls or modify game rules to suit their preferences, ensuring endless possibilities for gameplay variation and customization. ",
    "date":"2023/06/18",
    "category":"Videogames",
    "detailedImage":"https://imgur.com/SPUpbsL.mp4",
    "languages": ["C#"],
    "github":"https://github.com/Vlado1210/JUEGODEBILLAR"
},{
    "name": "2D Geometric Shapes Generator",
    "image" : "https://imgur.com/z7PuHfA.png",
    "description":"C# 2D Geometric Shapes Generator in Visual Studio creates and manipulates 2D shapes with customizable edges. Features include axis displacement, resizing, and canvas movement. Save and replay shape animations.",
    "fullDescription":"This tool empowers users to effortlessly create and manipulate 2D shapes with any number of edges. Offering a user-friendly interface, this application enables users to explore and transform geometric figures with ease.\n\nOne of the key features of this application is its ability to generate and display 2D shapes of varying complexity, allowing users to specify the number of edges for each shape. Whether it's a simple triangle or a complex polygon, users have the flexibility to create shapes according to their preferences. \n\nOnce created, users can manipulate these shapes in various ways, including displacement along the X and Y axes, resizing to adjust their scale, and movement across the canvas. The application provides intuitive controls for these transformations, ensuring a seamless user experience.\n\nAnother notable feature of the 2D Geometric Shapes Generator is its capability to record and save shape animations. Users can capture their interactions with the shapes, including changes in position, rotation, and scale, and save these movements for later playback. This feature enables users to create dynamic animations by replaying the recorded movements, adding a layer of interactivity to their designs. Furthermore, the application supports the generation and display of up to three shapes simultaneously, allowing users to compare and contrast their designs",
    "date":"2023/04/03",
    "category":"Videogames",
    "detailedImage":"https://imgur.com/v4sYUq1.mp4",
    "languages": ["C#"],
    "github": "https://github.com/Vlado1210/Parcial1Transformaciones2D"
},{
    "name": "Playlist handler",
    "image" : "https://imgur.com/LkDB4E4.png",
    "description":"Playlist Handler web app built with React and SpotifyAPI by CheckLeakedCC. Allows searching for songs and adding them to playlists with mood categories (hype, sad, party, chill). Features data fetching and state management with hooks.",
    "fullDescription":"Playlist Handler is a dynamic web application developed in React, integrating the SpotifyAPI by CheckLeakedCC to enable users to search for songs and curate personalized playlists. The app provides a seamless user experience, leveraging React's capabilities along with hooks like useState, useContext, and useEffect for efficient data management.\n\nUsers can easily search for songs by artist, group, album, or track name, utilizing the SpotifyAPI. Once a song is found, users can add it to their playlists, which can be further organized into subplaylists based on mood categories: hype, sad, party, and chill. This categorization allows for a more personalized and curated listening experience.\n\nOne of the standout features of the Playlist Handler is its flexibility in managing playlists. Users can effortlessly add or remove songs from their playlists and assign the same song to multiple mood categories within a playlist. This level of customization enhances the user's ability to tailor their playlists to their preferences and mood. \n\nThe development of the project serves as a valuable learning experience, offering opportunities to practice data fetching techniques and refine skills in state management using React hooks. By working with real-world APIs and implementing features like playlist organization and mood categorization, to gain practical insights into building robust and user-friendly web applications.",
    "date":"2024/01/15",
    "category":"Frontend",
    "detailedImage":"https://imgur.com/OsvtJXK.mp4",
    "languages": ["HTML","JS","CSS"],
    "github":"https://github.com/Vlado1210/ReactP_Playlist_Handler"
},{
    "name": "React Shopping Cart",
    "image" : "https://imgur.com/nFe2L0I.png",
    "description":"Shopping Cart web app: Select products, adjust quantities, and view detailed cart. Utilizes useState, useContext, and ReactRouter for seamless navigation.",
    "fullDescription":"Crafted with React, the  web app offers a seamless shopping experience. Users can browse products, adjust quantities, and view a detailed cart with selected items and total purchase. \n\nImplemented useState and useContext hooks for efficient state management, ensuring smooth interaction. Additionally, ReactRouter facilitates seamless navigation between pages. Once items are added to the cart, users can navigate to the cart page to view a detailed summary of their selections, including individual product details and the total purchase amount. This comprehensive overview enables users to review their selections and make any necessary adjustments before proceeding to checkout.",
    "date":"2023/12/13",
    "category":"Frontend",
    "detailedImage":"https://imgur.com/rP2h1nf.mp4",
    "languages": ["HTML","JS","CSS"],
    "github":"https://github.com/Vlado1210/ReactP_ShoppingCart"
},{
    "name": "React Notes App",
    "image" : "https://imgur.com/u355KHe.png",
    "description":"React Notes App allows users to create, edit, and delete notes (up to 200 characters) with search functionality. Designed for practicing array manipulation methods like .map, .filter, .includes, etc...",
    "fullDescription":"The Notes App is a web application developed with React, enabling users to efficiently manage their notes. Users can create, edit, and delete notes, each limited to 200 characters, streamlining organization and productivity. The app features a search functionality, allowing users to quickly locate notes by their content. \n\nDesigned as a practice tool for array manipulation, the app utilizes fundamental JavaScript methods such as .map, .filter, and .includes, along with concepts like the spread operator. These techniques optimize the app's performance, while reinforcing essential programming skills.",
    "date":"2023/12/18",
    "category":"Frontend",
    "detailedImage":"https://imgur.com/9OPRvmv.mp4",
    "languages": ["HTML","JS","CSS"],
    "github":"https://github.com/Vlado1210/ReactP_NotesApp"
},{
    "name": "Instagram copy",
    "image" : "https://imgur.com/XfE6JNK.png",
    "description":"The project replicates 2018 Instagram interface for CSS practice. Features mockup data for users, photos, and comments. Personalized profile section with photo uploads. Utilizes React Router for navigation.",
    "fullDescription":"The  project offers a hands-on opportunity to hone CSS skills by recreating the 2018 Instagram interface. Complete with mockup data for users, photos, and comments, the application faithfully replicates the look and feel of the popular social media platform. \n\nIn addition to mimicking the core functionalities of Instagram, such as photo uploads and comment sections, the project includes a personalized profile section. This section features user-specific content, including personal photos, adding an extra layer of authenticity to the experience. \n\nOverall, the React Instagram Copy project serves as an invaluable learning tool for enhancing  CSS skills while gaining practical experience in with some hooks in React by adding responsive buttons and features to add images. Moreover, the project provides insights into the intricacies of building complex user interfaces and managing state within a React application.",
    "date":"2023/12/27",
    "category":"Frontend",
    "detailedImage":"https://imgur.com/cRSEjuD.mp4",
    "languages": ["HTML","JS","CSS"],
    "github":"https://github.com/Vlado1210/ReactP_InstagramCopy"
}]