const events =[{
    "event"     : "Digital Publishing Summit Europe 2019",
    "place"     : "Paris, France",
    
    "href"      : "https://www.edrlab.org/dpub-summit-2019/"
  },
  {
    "event"     : "ebookcraft 2019",
    "place"     : "Toronto, Ontario, Canada",
   
    "href"      : "https://www.booknetcanada.ca/ebookcraft/"
  },
  {
    "event"     : "Les 10 ans des Assises du livre numérique",
    "place"     : "Paris, France",
    
    "href"      : "https://www.sne.fr/evenement_sne/les-10-ans-des-assises-du-livre-numerique/"
  },
  {
    "event"     : "W3C Workshop on Digital Publication Layout and Presentation (from Manga to Magazines)",
    "place"     : "Tokyo, Japan",
   
    "href"      : "https://www.w3.org/publishing/events/tokyo18-workshop/"
  },
  {
    "event"     : "Publishing WG F2F Meeting",
    "place"     : "Toronto, Ontario, Canada",
    
    "href"      : "https://www.w3.org/publishing/groups/publ-wg/Meetings/F2F/2018.05.Toronto"
  },
  {
    "event"     : "Digital Publishing Summit Europe 2018",
    "place"     : "Berlin, Germany",
   
    "href"      : "https://www.edrlab.org/dpub-summit-2018/"
  },
  {
    "event"     : "ebookcraft 2018",
    "place"     : "Toronto, Ontario, Canada",
   
    "href"      : "https://www.booknetcanada.ca/ebookcraft/"
  },
  
  {
    "event"     : "PubTechConnect: Where Publishing and Technology Intersect",
    "place"     : "New York, USA",
   
    "href"      : "http://www.PubTechConnect.com"
  }]
module.exports = {
    'App should list all events app load in the same order': function (browser) {
        browser
            .url(browser.launch_url)
            .pause(2000)
            .verify.elementPresent(".cls-event")
            .elements('css selector', '.cls-event', function (result) {
                this.verify.equal(result.value.length, events.length);
                for (let i = 0; i < events.length; i++) {
                    browser.elementIdText(result.value[i].ELEMENT, (ele) => {
                        if (ele.value.toLowerCase().includes(events[i].event.toLowerCase())) {
                            browser.verify.equal(true, true)
                        } else {
                            browser.verify.equal(true, false)
                        }
                    })
                    if (i == events.length - 1) browser.end()
                }
            })
    },
    'App should list all movies and actors on app load in the same order': function (browser) {
        browser
            .url(browser.launch_url)
            .verify.elementPresent(".cls-place")
            .elements('css selector', '.cls-place', function (result) {
                this.verify.equal(result.value.length, events.length);
                for (let i = 0; i < events.length; i++) {
                    browser.elementIdText(result.value[i].ELEMENT, (ele) => {
                        if (ele.value.toLowerCase().includes(events[i].place.toLowerCase())) {
                            browser.verify.equal(true, true)
                        } else {
                            browser.verify.equal(true, false)
                        }
                    })
                    if (i == events.length - 1) browser.end()
                }
            });
    },
    
   
}