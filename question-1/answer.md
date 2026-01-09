1.Node.js Architecture
Node.js Architecture is designed to handle multiple requests effectively using single-threaded and non-blocking events.

.JavaScript Engine(V8):
->V8 is the JavaScript engine developed by Google.
->It converts JavaScript code into machine-level code using Just-in-time compilation.
->It handles memory allocation and garbage collection.
->Node.js relies on V8 to excute JavaScript outside the browser.

.Node.js Core APIs:
->Core APIs are built-in modules provided by Node.js.
->They alllow interaction with operating system and system resources.
->It also includes file handling,networking,streams,and timers.

.Native Bindings:
->They acts a bridge between JavaScript and C/C++ code.
->They enable JS to cal call low-level system functions.
->These are  used internally to  connect Node.js APIs with libuv and OS features.

.Event Loop:
->Event loop is the heart of Node.js.
->It continously checks for pending tasks and excutes callbacks.
->It manages asynchronous operations.



2.libuv

.What is libuv:
->libuv is a C library used by Node.js.
->It provides asynchronous I/O operations and implements the event loop internally.

.Why Node.js needs libuv:
->As JS cannot directly perform non-blocking system-level operations libuv handles the tasks like file access,networking,and timers.
->It helps to keep the main thread non-blocking.

.Responsibilities of libuv:
->Manages the event-loop
->Handles asynchronous I/O operations,netwoking and file system operations
->Manages thread pool



3.Thread Pool

.What is a Thread pool:
->A thread pool is a group of background threads that used to excute tasks that cannot be handled asynhronously.
->It also used to prevent blocking the main event loop.

.Why Node.js uses a thread pool:
->As some operations are CPU-intensive or blocking by nature so by offloading them it keeps the application responsive.
->And also improves performance under heavy load.

.Which operations are handled by the thread pool:
->File system operations
->Cryptography functions
->Compression tasks
->DNS lookups



4.Worker Threads

.What are Worker threads:
->Worker threads allow JS code to run in parallel,where each worker has its own event loop and memory space.

.Why are worker threads neede:
->As the CPU-intensive tasks can block the main thread ,worker threads allow true parallel execution to improve performace for complex calculations.

.Difference between Thread pool and Worker threads
Thread pool                                    Worker threads
-------------------------------------------------------------
->Managed by libuv                  ->Managed by Node.js
->Used ffor internal operations     ->Used for custom JS code
->Limited no.of threads             ->Can create multiple threads
->Not directly controlled by developer ->Fully controlled by developer



5.Event Loop Queues

.Macro Task Queue:
->Contains long-running asynchronous tasks and tasks are executed after microtasks are cleared.
Ex:setTimeout
   setInterval
   setImmediate

.Micro Task Queue:
->Contains high-priority callbacks and executed immediately after the current call stack.
Ex:Promise.then()
   Promise.catch()
   Promise.finally()
   Promise.nextTick()

. Execution priority between them:
1.Current execution stack
2.Micro Task Queue
3.Macro Task Queue  