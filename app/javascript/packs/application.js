require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


import 'bootstrap';

import { navSlide } from '../components/navbar.js';
navSlide();

import  { playMemory } from '../components/memory.js';
playMemory();
