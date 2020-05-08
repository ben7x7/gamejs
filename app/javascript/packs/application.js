require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


import 'bootstrap';

import { navSlide } from '../components/navbar.js';
navSlide();

import  { playJackpot } from '../components/jackpot.js';
playJackpot();



