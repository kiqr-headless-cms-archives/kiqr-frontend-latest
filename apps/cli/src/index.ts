#!/usr/bin/env node

import application from './application.js'

import { initCommand } from '~commands/init.js'
import { inspectCommand } from '~commands/inspect.js'

application.addCommand(initCommand)
application.addCommand(inspectCommand)
application.parse()
