import { cac } from "https://unpkg.com/cac@6.7.14/mod.ts";
import Timer from "./timer.ts";

const cli = cac('tomatera');

cli.help();
cli.version('0.0.1');

cli
    .command('work [duration]', 'Start a work timer with specified duration in minutes (default = 55)')
    .action((duration) => {
        let d = 55  // default duration
        if (duration) {
            duration = parseInt(duration)
            if ( isNaN(duration) ) { throw new Error("Invalid duration"); }
            if ( duration <= 0 ) { throw new Error("Duration must be greater than zero"); }
            d = duration;
        }
        new Timer(d, 0, 'Time to take a break! 😴');
    });

cli
    .command('break [duration]', 'Start a break timer with specified duration in minutes (default = 5)')
    .action((duration) => {
        let d = 5  // default duration
        if (duration) {
            duration = parseInt(duration)
            if ( isNaN(duration) ) { throw new Error("Invalid duration"); }
            if ( duration <= 0 ) { throw new Error("Duration must be greater than zero"); }
            d = duration;
        }
        new Timer(d, 0, 'Time to get back to work! 💪');
    });

cli
    .command('<minutes> <seconds>', 'Start a timer with specified duration in minutes and seconds')
    .action((minutes, seconds) => {
        const m = parseInt(minutes);
        const s = parseInt(seconds);
        if ( isNaN(m) ) { throw new Error("Invalid minute duration"); }
        if ( isNaN(s) ) { throw new Error("Invalid second duration"); }
        if ( m < 0 || s < 0 ) { throw new Error("Invalid duration"); }
        if ( m === 0 && s === 0 ) { throw new Error("Invalid duration"); }
        new Timer(m, s, `Time's up! ⏳`);
    });

cli.parse();
