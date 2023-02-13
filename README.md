# tomatera-cli

A simple pomodoro timer for your terminal with system notifications, powered by Deno.

## Installation

```bash
deno install --unstable --allow-all --name tomatera https://deno.land/x/tomatera_cli@v0.0.4/mod.ts
```

## Usage

### Work Timer

Work timers default to 55 minutes, but can be provided an optional duration in minutes argument.

```bash
tomatera work  # Start default work timer

tomatera work 25  # Start 25 minute work timer
```

### Break Timer

Break timers default to 5 minutes, but can be provided an optional duration in minutes argument.

```bash
tomatera break  # Start default break timer

tomatera break 15  # Start 15 minute break timer
```

### General Timer

A general timer can be started, but must be given a minute and second duration argument.

```bash
tomatera 10 0  # Start a timer for 10 minutes

tomatera 0 30  # Start a timer for 30 seconds

tomatera 1 30 # Start a timer for 1 minute and 30 seconds
```
