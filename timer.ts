import Kia from "https://deno.land/x/kia@0.4.1/mod.ts";
import { Notification } from "https://deno.land/x/deno_notify@1.4.2/ts/mod.ts";

export default class Timer {

    minutes: number;
    seconds: number;
    kia: Kia;
    notification: Notification;

    constructor( minutes: number, seconds: number, message: string ) {
        this.minutes = minutes;
        this.seconds = seconds;

        this.kia = new Kia();
        this.notification = new Notification();
        this.notification.title('Tomatera CLI');
        this.notification.soundName('Blow');
        this.notification.body(message);

        this.update();
        this.countdown();
    }

    update() {
        const minutes = this.minutes.toString().padStart(1, '0');
        const seconds = this.seconds.toString().padStart(2, '0');
        this.kia.set(`${minutes}:${seconds} remaining...`);
    }

    tick() {
        if (this.seconds === 0 && this.minutes > 0) {
            this.minutes--;
            this.seconds = 59;
        } else {
            this.seconds--;
        }
    }

    countdown() {
        this.kia.start();
        const interval = setInterval(() => {
            this.tick();
            this.update();
            if (this.minutes === 0 && this.seconds === 0) {
                clearInterval(interval);
                this.kia.succeed(`Time's up!`);
                this.notification.show();
            }
        }, 1000);
    }

}