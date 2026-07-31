# EvenLoop
JS is synchronous and single threaded by default

## There can be async behaviour 
- with BowseAPI-setTimeout , setInterval , setImmediate,nextTick
- with promises
- with event handle

Promise- a fn not executed immediately but it must be executed after a while , it has some status during the execution. At final it may resolve(success) or reject(unsuccess) 

# Callback
that pass as argument or the parameter to another function

Modern JS is divided into two categories:
1. CommonJS (.cjs):supports OOPS ,require
 - priority (nextTick , promise , setImmediate/setTimeout)
2. ModuleJS (.mjs): follow modular approach , import
 - priority(promise , nextTick , setImmediate/setTimeout)  
