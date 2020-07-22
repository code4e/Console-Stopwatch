
//Implementation of stopwatch when methods are set in the instace itself

function Stopwatch(){

    let dur = 0;
    let started = false;
    let stopped = false;
    let id;

    Object.defineProperty(this, 'duration', {
        get: function(){
            console.log(dur);
        }
    });

    this.start = function(){
        if(started){
            throw new Error('Stopwatch already started');
            return;
        }
        else{
            started = true;
            stopped = false;
            dur = 0;
            id = setInterval(function(){
                dur++;
            }, 1000);
        }
    }
    this.stop = function(){
        if(stopped){
            throw new Error('Stopwatch already started');
            return;
        }
        else{
            started = false;
            stopped = true;
            clearInterval(id);
        }
    }

    this.reset = function(){
        dur = 0;
        stopped = true;
        started = false;
    }
}


// Implementation of stopwatch of stopwatch when methods are set inside prototype of the constructor

// function Stopwatch(){
//     let dur = 0;
//     Object.defineProperty(this, 'duration', {
//         get: function(){
//             console.log(dur);
//         }
//     });

//     Object.defineProperties(this, {
//         started: {
//             value: false,
//             writable: true
//         },
//         stopped: {
//             value: false,
//             writable: true

//         },
//         id: {
//             value: undefined,
//             writable: true

//         },
//         dur: {
//             dur: dur,
//             writable: true

//         }
//     });

// }

// Stopwatch.prototype.start = function(){
//     if(this.started){
//         throw new Error('Stopwatch already started');
//         return;
//     }
//     else{
//         this.started = true;
//         this.stopped = false;
//         this.dur = 0;
//         this.id = setInterval(function(){
//             this.dur++;
//         }, 1000);
//     }
// }

// Stopwatch.prototype.stop = function(){
//     if(this.stopped){
//         throw new Error('Stopwatch already started');
//         return;
//     }
//     else{
//         this.started = false;
//         this.stopped = true;
//         clearInterval(this.id);
//     }
// }

// Stopwatch.prototype.reset = function(){
//     this.dur = 0;
//     this.stopped = true;
//     this.started = false;
// }