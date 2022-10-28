/*const { readFileSync } = require("fs");*/
import { readFileSync } from 'fs'
import * as nodePath from 'path'
const srcFolder = nodePath.basename(`${nodePath.resolve()}/src`)

export const data = {
  menu: JSON.parse(readFileSync(`${srcFolder}/data/menu.json`, 'utf8')),
  icon: JSON.parse(readFileSync(`${srcFolder}/data/icon.json`, 'utf8')),
  feature: JSON.parse(readFileSync(`${srcFolder}/data/feature.json`, 'utf8')),
  benefit: JSON.parse(readFileSync(`${srcFolder}/data/benefit.json`, 'utf8')),
  map: JSON.parse(readFileSync(`${srcFolder}/data/map.json`, 'utf8')),
}
