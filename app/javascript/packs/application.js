require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';

import  { playJackpot } from '../components/jackpot.js';

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', playJackpot());
}
playJackpot();






