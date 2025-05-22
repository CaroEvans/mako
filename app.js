
import { promptList } from './data/prompts.js';


window.addEventListener('DOMContentLoaded', async () => {
  await loadPrompt();
});

async function loadPrompt() {
  var seedDate = new Date(2025, 4, 27, 0, 0, 0, 0);
  console.log("Seed date:", seedDate);
  
  function Na(e, a) {
      var s = new Date(e),
          t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
          console.log(Math.floor(t / (1000 * 60 * 60 * 24)));

      return Math.round(t / 864e5);
  }
  function findDayCount(seedDate, e) {
    var s = new Date(e),
        t = new Date(seedDate).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.floor(t / (1000 * 60 * 60 * 24)) + 1;
  }
  function Da(e) {
      var a,
          s = Ga(e);
      return (a = s % promptList.length), promptList[a];
  }
  function Ga(e) {
      return Na(seedDate, e);
  }
  
  var promptFromList = Da(new Date())
  var dayCount = findDayCount(new Date(), seedDate);
  document.getElementById("prompt").innerHTML = promptFromList;
  document.getElementById("dayCount").innerHTML = `Day ${dayCount}`;
}


