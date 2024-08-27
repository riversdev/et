import 'module-alias/register'
import dotenv from 'dotenv'

dotenv.config()

import { Server } from '@/Server'

new Server()