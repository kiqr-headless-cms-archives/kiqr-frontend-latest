#!/usr/bin/env node

import application from './application.js'

import { initCommand } from '~commands/init.js'
import { inspectCommand } from '~commands/inspect.js'
import { loginCommand } from '~commands/login.js'

application.addCommand(initCommand)
application.addCommand(inspectCommand)
application.addCommand(loginCommand)
application.parse()
