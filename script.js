// ==========================
// Course Setup
// ==========================
const courses = {
  Java: ["Introduction", "OOP Basics"],
  C: ["Basics", "Pointers"],
  "C++": ["STL", "OOP"],
  JavaScript: ["DOM", "ES6"],
  React: ["Components", "Hooks"],
  Python: ["Introduction", "Functions"],
  SQL: ["Introduction", "Joins"]
};

const courseVideos = {
  Java: {
    "Introduction": "https://www.youtube.com/embed/GoXwIVyNvX0",
    "OOP Basics": "https://www.youtube.com/embed/3cmzqZzwNDM"
  },
  C: {
    "Basics": "https://www.youtube.com/embed/KJgsSFOSQv0",
    "Pointers": "https://www.youtube.com/embed/zuegQmMdy8M"
  },
  "C++": {
    "STL": "https://www.youtube.com/embed/e2dcHH2D7d8",
    "OOP": "https://www.youtube.com/embed/MYyJ4PuL4pY"
  },
  JavaScript: {
    "DOM": "https://www.youtube.com/embed/0ik6X4DJKCc",
    "ES6": "https://www.youtube.com/embed/NCwa_xi0Uuc"
  },
  React: {
    "Components": "https://www.youtube.com/embed/Ke90Tje7VS0",
    "Hooks": "https://www.youtube.com/embed/f687hBjwFcM"
  },
  Python: {
    "Introduction": "https://www.youtube.com/embed/kqtD5dpn9C8",
    "Functions": "https://www.youtube.com/embed/NE97ylAnrz4"
  },
  SQL: {
    "Introduction": "https://www.youtube.com/embed/27axs9dO7AE",
    "Joins": "https://www.youtube.com/embed/9yeOJ0ZMUYw"
  }
};

// ==========================
// Cartoon GIFs for Quiz Result
// ==========================
const happyGif = "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif";
const sadGif =  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"; 
// ==========================
const quizQuestions = {
  Java: {
    "Introduction": [
      { q: "Java is a ___ language?", options: ["Procedural", "Object-Oriented", "Assembly"], answer: 1 },
      { q: "Who developed Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
      { q: "Java programs run on?", options: ["JVM", "Machine directly", "Assembler"], answer: 0 },
      { q: "Extension of Java files?", options: [".jav", ".java", ".jv"], answer: 1 },
      { q: "Which is not a Java feature?", options: ["Platform Independent", "Pointer Arithmetic", "OOP"], answer: 1 },
      { q: "Default value of int in Java?", options: ["0", "null", "undefined"], answer: 0 },
      { q: "Which tool compiles Java?", options: ["javac", "python", "gcc"], answer: 0 },
      { q: "JVM is responsible for?", options: ["Executing bytecode", "Compiling .java", "Networking"], answer: 0 },
      { q: "Is Java strongly typed?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "Java supports multiple inheritance using?", options: ["Classes", "Interfaces", "Objects"], answer: 1 },
      { q: "Which keyword is used for inheritance?", options: ["implements", "extends", "inherits"], answer: 1 },
      { q: "Which collection does not allow duplicates?", options: ["List", "Set", "Map"], answer: 1 },
      { q: "Which is not an access specifier?", options: ["private", "protected", "internal"], answer: 2 },
      { q: "JVM converts bytecode into?", options: ["Assembly", "Machine code", "Java source"], answer: 1 },
      { q: "JVM is?", options: ["Software", "Hardware", "OS"], answer: 0 }
    ],
    "OOP Basics": [
      { q: "OOP stands for?", options: ["Object-Oriented Programming", "Only Oriented Program", "Open Object Process"], answer: 0 },
      { q: "Encapsulation is?", options: ["Binding data/methods", "Inheritance", "Abstraction"], answer: 0 },
      { q: "Inheritance achieves?", options: ["Code reuse", "Security", "Compilation"], answer: 0 },
      { q: "Overloading means?", options: ["Same name diff params", "Same params diff class", "Same return type"], answer: 0 },
      { q: "Overriding means?", options: ["Subclass redefines parent", "Multiple methods same name", "Interface methods"], answer: 0 },
      { q: "Abstract class can have?", options: ["Abstract & concrete methods", "Only abstract", "Only static"], answer: 0 },
      { q: "Interface in Java contains?", options: ["Abstract methods", "Concrete methods", "Variables only"], answer: 0 },
      { q: "Polymorphism means?", options: ["Many forms", "One form", "No form"], answer: 0 },
      { q: "Constructor is?", options: ["Special method initializes object", "Normal method", "Variable"], answer: 0 },
      { q: "this keyword refers to?", options: ["Current object", "Parent class", "Static method"], answer: 0 },
      { q: "super keyword refers to?", options: ["Parent class", "Child class", "Current object"], answer: 0 },
      { q: "Static method belongs to?", options: ["Class", "Object", "Thread"], answer: 0 },
      { q: "Final class means?", options: ["Cannot be inherited", "Cannot be instantiated", "Immutable"], answer: 0 },
      { q: "Which principle hides implementation?", options: ["Abstraction", "Encapsulation", "Polymorphism"], answer: 0 },
      { q: "Multiple inheritance in Java is via?", options: ["Interfaces", "Classes", "Packages"], answer: 0 }
    ]
  },
  C: {
    "Basics": [
      { q: "C is a ___ language?", options: ["High-level", "Assembly", "Both"], answer: 0 },
      { q: "Who developed C?", options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], answer: 0 },
      { q: "C file extension?", options: [".c", ".cpp", ".java"], answer: 0 },
      { q: "C supports?", options: ["Pointers", "Inheritance", "Polymorphism"], answer: 0 },
      { q: "C is ___ typed?", options: ["Weakly", "Strongly", "Not typed"], answer: 1 },
      { q: "Main function return type?", options: ["int", "void", "float"], answer: 0 },
      { q: "C is ___ paradigm?", options: ["Procedural", "OOP", "Functional"], answer: 0 },
      { q: "Which is loop in C?", options: ["for", "foreach", "repeat"], answer: 0 },
      { q: "C program starts with?", options: ["main()", "start()", "init()"], answer: 0 },
      { q: "C supports comments?", options: ["// and /* */", "#", "<!-- -->"], answer: 0 },
      { q: "C compiler?", options: ["gcc", "javac", "python"], answer: 0 },
      { q: "Size of int in C?", options: ["4 bytes", "8 bytes", "Depends"], answer: 2 },
      { q: "C does not have?", options: ["Classes", "Functions", "Variables"], answer: 0 },
      { q: "C uses?", options: ["Semicolon", "Colon", "Dot"], answer: 0 },
      { q: "Which is conditional?", options: ["if", "loop", "function"], answer: 0 }
    ],
    "Pointers": [
      { q: "Pointer stores?", options: ["Memory address", "Value", "Object"], answer: 0 },
      { q: "Pointer symbol?", options: ["*", "&", "%"], answer: 0 },
      { q: "NULL pointer value?", options: ["0", "-1", "None"], answer: 0 },
      { q: "Pointer to pointer?", options: ["**", "*&", "&&"], answer: 0 },
      { q: "Pointer arithmetic allowed?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "Dereferencing operator?", options: ["*", "&", "%"], answer: 0 },
      { q: "Pointer increment?", options: ["ptr++", "ptr--", "ptr+&"], answer: 0 },
      { q: "Pointer to function?", options: ["Yes", "No", "Not directly"], answer: 0 },
      { q: "Pointer size depends on?", options: ["Architecture", "Compiler", "OS"], answer: 0 },
      { q: "Pointer cannot store?", options: ["Non-address", "Address", "NULL"], answer: 0 },
      { q: "Pointer & array relation?", options: ["Array decays to pointer", "No relation", "Array stores pointer"], answer: 0 },
      { q: "Pointer for dynamic memory?", options: ["malloc/free", "scanf/printf", "None"], answer: 0 },
      { q: "void * pointer?", options: ["Generic pointer", "Integer pointer", "String pointer"], answer: 0 },
      { q: "Pointer addition?", options: ["Moves by type size", "Moves by 1 byte", "Moves by 4 bytes"], answer: 0 },
      { q: "Pointer can be?", options: ["NULL", "Uninitialized", "Both"], answer: 2 }
    ]
  },
  "C++": {
    "STL": [
      { q: "STL stands for?", options: ["Standard Template Library", "Simple Type Library", "Structured Tools Library"], answer: 0 },
      { q: "Which container allows duplicates?", options: ["Vector", "Set", "Map"], answer: 0 },
      { q: "STL supports?", options: ["Algorithms", "OS", "Networking"], answer: 0 },
      { q: "Which is associative container?", options: ["Map", "Vector", "List"], answer: 0 },
      { q: "Iterator is?", options: ["Object to traverse container", "Function", "Class"], answer: 0 },
      { q: "STL is part of?", options: ["C++ Standard Library", "C Standard Library", "Java Library"], answer: 0 },
      { q: "Vector is?", options: ["Dynamic array", "Linked list", "Tree"], answer: 0 },
      { q: "List is?", options: ["Doubly linked list", "Array", "Stack"], answer: 0 },
      { q: "Set stores?", options: ["Unique values", "Duplicates", "Objects"], answer: 0 },
      { q: "Map stores?", options: ["Key-value pairs", "Values only", "Keys only"], answer: 0 },
      { q: "STL algorithm?", options: ["sort()", "printf()", "scanf()"], answer: 0 },
      { q: "STL containers?", options: ["Vector, List, Map", "Array, Object", "String"], answer: 0 },
      { q: "erase() used in?", options: ["Container", "Function", "Class"], answer: 0 },
      { q: "STL introduced in?", options: ["C++98", "C89", "Java"], answer: 0 },
      { q: "STL provides?", options: ["Code reuse", "Networking", "OS services"], answer: 0 }
    ],
    "OOP": [
      { q: "C++ supports?", options: ["OOP", "Procedural", "Both"], answer: 2 },
      { q: "Constructor is?", options: ["Special function", "Normal function", "Variable"], answer: 0 },
      { q: "Destructor uses?", options: ["~ClassName()", "delete()", "remove()"], answer: 0 },
      { q: "Encapsulation achieved by?", options: ["Private members", "Public members", "Friend function"], answer: 0 },
      { q: "Inheritance type?", options: ["Single, Multiple, Multilevel", "Only single", "Only multiple"], answer: 0 },
      { q: "Polymorphism means?", options: ["Many forms", "One form", "No form"], answer: 0 },
      { q: "Overloading in C++?", options: ["Function or Operator", "Variable", "Class"], answer: 0 },
      { q: "Virtual function is?", options: ["Runtime polymorphism", "Compile time", "Template"], answer: 0 },
      { q: "Friend function?", options: ["Access private data", "Cannot access data", "Global function"], answer: 0 },
      { q: "Namespace used?", options: ["Avoid name conflicts", "Debugging", "Looping"], answer: 0 },
      { q: "C++ file extension?", options: [".cpp", ".c", ".java"], answer: 0 },
      { q: "C++ supports?", options: ["Templates", "Pointers", "Both"], answer: 2 },
      { q: "Multiple inheritance achieved via?", options: ["Classes", "Objects", "Functions"], answer: 0 },
      { q: "Access specifiers?", options: ["private, public, protected", "static, final", "var, let, const"], answer: 0 },
      { q: "Destructor called automatically?", options: ["Yes", "No", "Sometimes"], answer: 0 }
    ]
  },
  JavaScript: {
    "DOM": [
      { q: "DOM stands for?", options: ["Document Object Model", "Data Object Model", "Document Option Model"], answer: 0 },
      { q: "document.getElementById returns?", options: ["Element", "Array", "String"], answer: 0 },
      { q: "document.querySelector selects?", options: ["First matching element", "All elements", "None"], answer: 0 },
      { q: "InnerHTML changes?", options: ["Content", "CSS", "Attributes"], answer: 0 },
      { q: "DOM is part of?", options: ["Browser API", "Node.js", "Java"], answer: 0 },
      { q: "createElement used for?", options: ["Creating HTML element", "Deleting element", "Updating text"], answer: 0 },
      { q: "appendChild does?", options: ["Add child to element", "Remove child", "Change attribute"], answer: 0 },
      { q: "removeChild does?", options: ["Remove child element", "Add child", "Change CSS"], answer: 0 },
      { q: "DOM event example?", options: ["onclick", "print()", "scanf()"], answer: 0 },
      { q: "getElementsByClassName returns?", options: ["HTMLCollection", "Array", "Object"], answer: 0 },
      { q: "getElementsByTagName?", options: ["HTMLCollection", "Array", "Object"], answer: 0 },
      { q: "querySelectorAll?", options: ["NodeList", "Array", "Object"], answer: 0 },
      { q: "DOM manipulation changes?", options: ["UI dynamically", "Static page", "Console only"], answer: 0 },
      { q: "addEventListener?", options: ["Attach event handler", "Remove element", "Change CSS"], answer: 0 },
      { q: "parentNode?", options: ["Parent of element", "Child element", "Sibling"], answer: 0 }
    ],
    "ES6": [
      { q: "ES6 introduced?", options: ["let, const, arrow functions", "var only", "None"], answer: 0 },
      { q: "Arrow function syntax?", options: ["()=>{}", "function(){}", "->{}"], answer: 0 },
      { q: "Template literals?", options: ["Backticks ` `", "Quotes ''", "Double quotes"], answer: 0 },
      { q: "Default parameters?", options: ["function(a=1)", "function(a)", "function=1"], answer: 0 },
      { q: "Destructuring used for?", options: ["Extract values", "Assign values", "Print values"], answer: 0 },
      { q: "Spread operator?", options: ["...", "++", "**"], answer: 0 },
      { q: "Rest parameter?", options: ["...args", "args[]", "args{}"], answer: 0 },
      { q: "Const is?", options: ["Immutable reference", "Mutable", "Global only"], answer: 0 },
      { q: "Let is?", options: ["Block scoped", "Function scoped", "Global only"], answer: 0 },
      { q: "ES6 class?", options: ["Syntactic sugar for function", "New type", "Module"], answer: 0 },
      { q: "Arrow function this?", options: ["Lexical this", "Dynamic this", "Global this"], answer: 0 },
      { q: "Promises used for?", options: ["Async operations", "Sync only", "Looping"], answer: 0 },
      { q: "Modules?", options: ["export/import", "require", "include"], answer: 0 },
      { q: "Map introduced in ES6?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "Set stores?", options: ["Unique values", "Duplicates", "Key-value"], answer: 0 }
    ]
  },
  React: {
    "Components": [
      { q: "React is a ___ library?", options: ["UI", "Backend", "Database"], answer: 0 },
      { q: "Component types?", options: ["Functional, Class", "Only functional", "Only class"], answer: 0 },
      { q: "JSX stands for?", options: ["JavaScript XML", "Java Standard XML", "Java Syntax"], answer: 0 },
      { q: "Props are?", options: ["Read-only data", "Mutable", "State"], answer: 0 },
      { q: "State used for?", options: ["Dynamic data", "Static data", "Props"], answer: 0 },
      { q: "Render method?", options: ["Return JSX", "Update state", "Call props"], answer: 0 },
      { q: "Component lifecycle?", options: ["Mounting, Updating, Unmounting", "Only mounting", "Only updating"], answer: 0 },
      { q: "React event?", options: ["onClick", "onclick", "clickEvent"], answer: 0 },
      { q: "Key prop?", options: ["Unique identifier in list", "Random value", "Index only"], answer: 0 },
      { q: "Fragments used?", options: ["Grouping elements", "Styling", "Animation"], answer: 0 },
      { q: "Default props?", options: ["Fallback values", "State", "Event"], answer: 0 },
      { q: "Controlled component?", options: ["Input managed by state", "Static input", "No input"], answer: 0 },
      { q: "Uncontrolled component?", options: ["Refs to access input", "State-managed", "None"], answer: 0 },
      { q: "PureComponent?", options: ["Optimized render", "Basic render", "Class only"], answer: 0 },
      { q: "React hook?", options: ["Function to use state/lifecycle", "Class method", "DOM function"], answer: 0 }
    ],
    "Hooks": [
      { q: "useState returns?", options: ["State + updater", "Only state", "Only updater"], answer: 0 },
      { q: "useEffect used for?", options: ["Side effects", "State", "Props"], answer: 0 },
      { q: "useContext provides?", options: ["Global state", "Local state", "DOM"], answer: 0 },
      { q: "Custom hooks start with?", options: ["use", "hook", "custom"], answer: 0 },
      { q: "useRef used for?", options: ["DOM reference", "State", "Props"], answer: 0 },
      { q: "Rules of hooks?", options: ["Top level only", "Inside loops", "Inside conditionals"], answer: 0 },
      { q: "useMemo?", options: ["Memoize value", "State update", "Event handler"], answer: 0 },
      { q: "useCallback?", options: ["Memoize function", "Update state", "Render component"], answer: 0 },
      { q: "useReducer?", options: ["State management", "DOM access", "Props"], answer: 0 },
      { q: "Hook cannot be?", options: ["Called conditionally", "Called at top level", "Used in functional component"], answer: 0 },
      { q: "useLayoutEffect?", options: ["Synchronous effect", "Async effect", "State"], answer: 0 },
      { q: "useDebugValue?", options: ["Custom hook debug info", "State hook", "Effect hook"], answer: 0 },
      { q: "useImperativeHandle?", options: ["Expose methods to parent", "Change state", "DOM event"], answer: 0 },
      { q: "Hooks introduced in?", options: ["React 16.8", "React 15", "React 17"], answer: 0 },
      { q: "Hook rules applies to?", options: ["Functional components", "Class components", "All components"], answer: 0 }
    ]
  },
  Python: {
    "Introduction": [
      { q: "Python is ___ typed?", options: ["Dynamically", "Statically", "Both"], answer: 0 },
      { q: "Python created by?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie"], answer: 0 },
      { q: "File extension?", options: [".py", ".java", ".c"], answer: 0 },
      { q: "Python is?", options: ["Interpreted", "Compiled", "Assembly"], answer: 0 },
      { q: "Python supports?", options: ["OOP, Procedural", "Only OOP", "Only Procedural"], answer: 0 },
      { q: "Python version 3 released in?", options: ["2008", "2000", "2010"], answer: 0 },
      { q: "Indentation in Python?", options: ["Blocks", "Curly braces", "Semicolon"], answer: 0 },
      { q: "Dynamic typing means?", options: ["Type checked at runtime", "Compile time", "No types"], answer: 0 },
      { q: "Mutable type?", options: ["List", "Tuple", "String"], answer: 0 },
      { q: "Immutable type?", options: ["Tuple", "List", "Dict"], answer: 0 },
      { q: "Python uses?", options: ["Indentation", "Braces", "Keywords"], answer: 0 },
      { q: "Print function?", options: ["print()", "echo()", "console.log()"], answer: 0 },
      { q: "Python loop?", options: ["for", "foreach", "repeat"], answer: 0 },
      { q: "Python conditional?", options: ["if/elif/else", "switch", "case"], answer: 0 },
      { q: "Python supports?", options: ["Functions", "Classes", "Both"], answer: 2 }
    ],
    "Functions": [
      { q: "Function defined using?", options: ["def", "function", "fun"], answer: 0 },
      { q: "Function returns?", options: ["Value", "Nothing", "Both"], answer: 2 },
      { q: "Arguments passed by?", options: ["Reference/Value", "Value only", "Reference only"], answer: 0 },
      { q: "Default arguments?", options: ["def f(a=1)", "def f(a)", "f(a=1)"], answer: 0 },
      { q: "Keyword arguments?", options: ["name=value", "position", "random"], answer: 0 },
      { q: "Lambda function?", options: ["Anonymous function", "Named function", "Method"], answer: 0 },
      { q: "Global variable inside function?", options: ["global keyword", "None", "static"], answer: 0 },
      { q: "Return multiple values?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "Docstring purpose?", options: ["Documentation", "Execution", "Debug"], answer: 0 },
      { q: "Recursion possible?", options: ["Yes", "No", "Depends"], answer: 0 },
      { q: "Function scope?", options: ["Local", "Global", "Both"], answer: 2 },
      { q: "Nested functions?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "Pass by value/reference?", options: ["Reference for mutable", "Value for immutable", "Both"], answer: 2 },
      { q: "Python function returns None by default?", options: ["Yes", "No", "Depends"], answer: 0 },
      { q: "Variable arguments?", options: ["*args, **kwargs", "varargs", "Both"], answer: 0 }
    ]
  },
  SQL: {
    "Introduction": [
      { q: "SQL stands for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query List"], answer: 0 },
      { q: "SQL used for?", options: ["Database operations", "Networking", "UI"], answer: 0 },
      { q: "Command to retrieve data?", options: ["SELECT", "GET", "FETCH"], answer: 0 },
      { q: "Insert data command?", options: ["INSERT INTO", "ADD", "INTO"], answer: 0 },
      { q: "Update data?", options: ["UPDATE", "SET", "MODIFY"], answer: 0 },
      { q: "Delete data?", options: ["DELETE FROM", "REMOVE", "DROP"], answer: 0 },
      { q: "SQL query ends with?", options: [";", ".", ":"], answer: 0 },
      { q: "Primary key?", options: ["Unique identifier", "Any column", "Duplicate"], answer: 0 },
      { q: "Foreign key?", options: ["Reference to PK", "Any key", "None"], answer: 0 },
      { q: "Join used for?", options: ["Combine tables", "Filter rows", "Aggregate"], answer: 0 },
      { q: "Types of joins?", options: ["INNER, LEFT, RIGHT, FULL", "TOP, BOTTOM", "SIDE"], answer: 0 },
      { q: "Constraint example?", options: ["NOT NULL", "var", "set"], answer: 0 },
      { q: "SQL functions?", options: ["COUNT(), SUM()", "printf()", "console.log()"], answer: 0 },
      { q: "Order data?", options: ["ORDER BY", "SORT", "GROUP"], answer: 0 },
      { q: "Group data?", options: ["GROUP BY", "ORDER BY", "FILTER"], answer: 0 }
    ],
    "Joins": [
      { q: "INNER JOIN returns?", options: ["Matching rows", "All rows", "None"], answer: 0 },
      { q: "LEFT JOIN returns?", options: ["All left + matching right", "All right only", "All rows"], answer: 0 },
      { q: "RIGHT JOIN returns?", options: ["All right + matching left", "All left only", "None"], answer: 0 },
      { q: "FULL OUTER JOIN?", options: ["All rows from both tables", "Matching only", "Left only"], answer: 0 },
      { q: "Self join?", options: ["Table joined with itself", "Different table", "None"], answer: 0 },
      { q: "CROSS JOIN?", options: ["Cartesian product", "Merge", "Intersect"], answer: 0 },
      { q: "Join syntax uses?", options: ["ON", "WHERE", "FROM"], answer: 0 },
      { q: "Alias in join?", options: ["Temporary name", "Permanent name", "Column name"], answer: 0 },
      { q: "Multiple join possible?", options: ["Yes", "No", "Sometimes"], answer: 0 },
      { q: "JOIN filters using?", options: ["ON condition", "WHERE only", "SELECT"], answer: 0 },
      { q: "Equi join?", options: ["Using =", "Using >", "Using <"], answer: 0 },
      { q: "Natural join?", options: ["Columns with same name", "Any column", "Random"], answer: 0 },
      { q: "Using clause?", options: ["Specify column", "Ignore column", "All columns"], answer: 0 },
      { q: "Outer join syntax?", options: ["LEFT/RIGHT/FULL OUTER JOIN", "INNER JOIN", "UNION"], answer: 0 },
      { q: "Join returns?", options: ["Result table", "Original table", "None"], answer: 0 }
    ]
  }
};

// ==========================
// State
// ==========================
let selectedCourse = "";
let selectedTopic = "";
let currentQuestion = 0;
let score = 0;

// ==========================
// Navigation Functions
// ==========================
function goToCourses() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("course-selection").style.display = "block";

  const courseList = document.getElementById("course-list");
  courseList.innerHTML = "";

  Object.keys(courses).forEach(course => {
    const li = document.createElement("li");
    li.textContent = course;
    li.onclick = () => selectCourse(course);
    courseList.appendChild(li);
  });
}

function selectCourse(course) {
  selectedCourse = course;
  document.getElementById("course-selection").style.display = "none";
  document.getElementById("topic-selection").style.display = "block";

  const topicList = document.getElementById("topic-list");
  topicList.innerHTML = "";

  courses[course].forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic;
    li.onclick = () => selectTopic(topic);
    topicList.appendChild(li);
  });
}

function selectTopic(topic) {
  selectedTopic = topic;
  document.getElementById("topic-selection").style.display = "none";
  document.getElementById("video-section").style.display = "block";
  document.getElementById("tutorial-video").src = courseVideos[selectedCourse][topic];
}

// ==========================
// Quiz Functions
// ==========================
function startQuiz() {
  if (!selectedCourse || !selectedTopic) {
    alert("⚠️ Please select a course and topic before starting the quiz!");
    return;
  }
  document.getElementById("video-section").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  score = 0;
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  const questions = quizQuestions[selectedCourse][selectedTopic];
  const qObj = questions[currentQuestion];

  document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  const qElem = document.createElement("p");
  qElem.textContent = qObj.q;
  container.appendChild(qElem);

  qObj.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (idx === qObj.answer) score++;
      nextQuestion();
    };
    container.appendChild(btn);
  });
}

function nextQuestion() {
  const questions = quizQuestions[selectedCourse][selectedTopic];
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";

  if (score > 10) {
    document.getElementById("result-message").textContent = "Good Job 🎉";
    document.getElementById("doll").src = happyGif;
  } else {
    document.getElementById("result-message").textContent = "Try Again 😢";
    document.getElementById("doll").src = sadGif;
  }
}

function restart() {
  document.getElementById("result-section").style.display = "none";
  document.getElementById("course-selection").style.display = "block";
}
