const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}








function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionButtonsElement.appendChild(button)
        }
      })
  }


  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }


  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }
  


const textNodes =[

    {
        id: 1,
        text: 'Welcome to "Escaping Syria: A Journey to escape Syria" Step into the shoes of Ibrahim Ahmed as you embark on a journey from Aleppo, Syria, to seek safety and freedom in Europe. This interactive experience will challenge your decision making skills as you face obstacles, and navigate a world filled with danger and uncertainty. Are you ready to embark on this adventure? Prepare to test your resilience, resourcefulness, and courage as you forge ahead, guided by your determination to find a better life for yourself and your loved ones. Remember, every choice you make will shape your destiny. Choose wisely.',
        options: [
          {
            text: 'Start The Game!',
            setState: { money: 2100, knife: true, food: 5, water:5, picture: true, energy: 100},
            nextText: 2
          },
          {
            text: 'Start The Game!',
            setState: { money: 2100, knife: true, food: 5, water:5, picture: true, energy: 100},
            nextText: 2
          },
         
        ]
      },

   {

    id:2,
    text: "It is the year 2016, and you are Ibrahim Ahmed, a 23-year-old living in Aleppo, Syria. Before the war began, you were attending university, and working multiple jobs to pay for tuition while also having the responsibility of providing for your family. With your sick parents unable to work and your young twin siblings, Centola and Carim, too young to work, you had taken on the role of caretaker and provider. As the conflict intensified, your parents passed away because of illness, leaving you devastated and now with even more responsibility. Determined to protect your family, you put your dreams of education and a better life on hold, leaving university and taking over more jobs. Even with everything going on you found purpose in joining the White Helmets, an organization dedicated to saving lives with the chaos of the war. For several months, you risked everything, pulling hundreds of people from the brink of death. Some of your friends expressed concern, cautioning you about the dangers you faced, but you were determined to keep on going. With everything going on and with all your work, you inadvertently neglected your primary responsibility your siblings. Disaster struck when Carim, your beloved brother, became a casualty of an airstrike while playing outside with his friends. The weight of grief tore down on your heart. News of the takeover of Aleppo by Assad's government and the consequences for those who opposed them propelled you into action. It became clear that for the safety of yourself and your remaining sibling, Centola, you had to leave Syria behind. Austria which you heard many people talking about became your place of hope where you could seek asylum and rebuild your lives.",
    options: [

        {
            text: 'Restart for some reason',
            nextText: -1
          },
        

        {
          text: 'Continue',
          nextText: 3
        },
      
       
      ]

   },
   
   {
    id:3,
    text: "As you planned your escape, you stumbled upon a map left by a friend who had successfully escaped earlier. It was a route to Germany, which would require adjustments once you reached Europe. With the map in hand, the path to Austria seemed clearer. But first, you had to navigate the dangerous journey to the border between Syria and Turkey. Gathering your essentials water, food, a change of clothes, minimal hygiene products, the map, and a compass you armed yourself with a knife for protection. A family photograph, depicting the moments before the war tore your lives apart, found its place among your belongings—a constant reminder of the life you hoped to reclaim. 'Centola, it's time to go!' you called out, your voice a mix of determination and nervous anticipation. Together, you boarded a bus that would take you to the Syria-Turkey border, setting the stage for the challenges that awaited you. The unknown loomed large, but you were resolved to navigate this treacherous path to freedom.",
    options: [

        {
            text: 'Go Back',
            nextText: 2
          },
        

        {
          text: 'Continue',
          nextText: 4
        },
      
       
      ]
   },

   {
    id:4,
    text: "You and Centola embark on a challenging journey through Turkey, determined to reach safety and continue your quest towards Austria. Guided by the map left by your friend, you navigate through cities, villages, and vast stretches of countryside. The journey is physically demanding. Days are spent walking under the scorching sun, with occasional breaks in shaded areas. You rely on a map to navigate through unfamiliar territories, making adjustments to stay hidden. As you pass through towns language barriers prove challenging, but your determination enables you to communicate and secure essentials like food and water. Occasionally, you rely on public transportation or hitch rides from kind-hearted locals. Throughout the journey, you remain cautious, looking out for potential risks and individuals seeking to exploit vulnerable refugees.  Finally, you arrive at the coastal region, where the next phase of your journey awaits. The sparkling sea offers hope and uncertainty. You explore options for crossing to Greece, weighing the risks and considering the best approach to ensure your safety and Centola's well-being.",
    options: [

        {
            text: 'Go Back',
            nextText: 3
          },
        

        {
          text: 'Continue',
          nextText: 5
        },
      
       
      ]
   },

   {
    id:5,
    text: "Your next step is to take a boat from Turkey to Greece, which will allow you to continue your journey through Europe. However, you face a significant challenge as you encounter a smuggler who demands a large sum of money to help you cross the border. The smuggler insists on receiving 5 million Syrian pounds or approximately $2000 USD, which is a substantial amount considering your limited funds of $2300. Giving away such a significant portion of your money would leave you with very little for the rest of your journey. It is a difficult decision to make, as your financial resources are crucial for your survival and the well-being of your sister, Centola. You have two options to overcome this obstacle: \
     Choice A: Try to sneak onto the boat later when other people are getting on. This option involves taking matters into your own hands and attempting to bypass the smuggler altogether. It is a riskier approach but may provide a chance to save your money and secure your passage to Greece. \
     Choice B:  Risk trying to find another smuggler who may offer a better price. While the current smuggler claims that it is unlikely, there might be a possibility of finding someone more reasonable. This option involves taking a chance and exploring other options, potentially saving some of your precious funds.",
    options: [

        {
            text: 'Choice A',
            nextText: 50
          },
        

        {
          text: 'Choice B (successful)',
          nextText: 6
        },
      
       
      ]
   },

    {
        id:50,
        text:"As the boat sets sail towards Greece, you find yourself among a sea of desperate souls, all seeking a chance at a better life. However, as the journey progresses, a new obstacle emerges. The boat becomes dangerously overcrowded, putting everyone's lives at risk. Panic and fear grip the passengers, and you are faced with a heart-wrenching decision. \
        Choice A: Throw Your Belongings Overboard.  \
        Choice B: Risk It and Keep Your Belongings. \
        ",
        options: [

            {
                text: 'Choice A',
                nextText: 51
              },
            
    
            {
              text: 'Choice B',
              nextText: 80
            },
          
           
          ]
    },


    {
        id:51,
        text: "Realizing the seriousness of the situation, you make the choice to throw your belongings overboard. It is a painful sacrifice, letting go of the tangible reminders of your past life. As your belongings sink into the vast sea, a mix of emotions floods your heart. Fear and uncertainty mingle with a glimmer of hope for survival. The boat stabilizes, and a collective sigh of relief ripples through the passengers. Though you have lost your belongings, you have preserved something far more valuable: your life and the chance for a new beginning.",
        options: [

            {
                text: 'Go Back',
                nextText: 50
              },
            
    
            {
              text: 'Continue',
              nextText: 52
            },
          
           
          ]
    },

    {

        id:52,
        text:"Having made the hard decision to throw your belongings overboard, you are now in Greece, deprived of everything you once possessed. The consequence of your loss hangs heavy. As the days pass, you face the harsh reality the choice has led to unexpected setbacks. The scarcity of food, money, and a stable environment makes it almsot impossible to continue your journey. You can either Choice A: Try to Survive with the Help of Others. Or Choice B: Go to a refugee camp but risk not being able to get out.",

        options: [

            {
                text: 'Choice A',
                nextText: 53
              },
            
    
            {
              text: 'Choice B',
              nextText: 420
            },
          
           
          ]

    },


    {

        id:53,
        text:"Determined to forge ahead, you rely on the kindness of strangers to navigate through the unfamiliar streets. You approach locals, hoping for compassion and assistance. Some show sympathy, offering a bit of food or spare change. However, surviving solely on the goodwill of others proves unsustainable. The harsh reality sets in as you face hunger, exhaustion, and the constant threat of exploitation. You die.",
        options: [

            {
                text: 'Restart',
                nextText: -1
              },
            
    
            {
              text: 'Restart',
              nextText: -1
            },
          
           
          ]

    },


    {
        id:80,
        text:"You refuse to drop your belongings into the sea, clinging to the remnants of your past life. The weight of your belonings becomes a burden, but you hold onto them tightly, hoping for a miracle. However, as the boat becomes more unstable and the situation grows worse, the weight of your decision becomes overwhelming. The boat begins to capsize, and chaos follows. In the midst of the chaos, you fight desperately to keep your belongings above water, but ultimately, the struggle proves hopeless. You find yourself submerged, your dreams sinking along with your belongings. You die.",
        options: [

            {
                text: 'Restart',
                nextText: -1
              },
            
    
            {
              text: 'Restart',
              nextText: -1
            },
          
           
          ]
    },



   {
    id:6,
    text:"You weigh the options carefully and decide to take the risk of finding another smuggler. The thought of losing most of your savings is scary, and you hope to secure a more reasonable price. With determination in your heart, you set out to search for an alternative. After days of discreet  conversations, you finally come across a contact who claims to have a better deal. Nervously, you meet the new smuggler in a dimly lit alleyway. He scrutinizes you and Centola, assessing your vulnerability and desperation. 'I can take you to Greece for 1000 USD,' he says in a hushed voice, eyes darting around. Relief floods over you. The price is still high, but it's a significant reduction compared to the previous smuggler. You haggle a little, eventually settling on a final agreement. Handing over the money, you feel a mix of anxiety and anticipation. This is a big step, and you hope that the decision you made will pay off.",
    options: [

        {
            text: 'Go Back',
            nextText: 5
          },
        

        {
          text: 'Continue',
          nextText: 7
        },
      
       
      ]
},

{
    id:7,
    text:"As the day arrives, you and Centola make your way to the agreed-upon location. It is a tense moment as you wait, surrounded by other desperate individuals seeking passage. \
    Finally, a small boat appears on the horizon. It's the moment of truth. You and Centola board the boat, heart pounding in your chest. The boat rocks gently as you set off, leaving the shores of Turkey behind. Waves crash against the sides, reminding you of the risks and challenges that lie ahead.\
    The journey across the Aegean Sea is not an easy one. The boat is packed with people, each person holding onto their dreams of a better future. Emotions are high as you sail through choppy waters, the horizon becoming your only guide. Fear, hope, and a mix of other emotions wash over you, but you stay strong, knowing that this treacherous journey is a necessary step toward safety and freedom.\
    After what feels like an eternity, the boat reaches the shores of Greece. You step onto solid ground, grateful for having survived the perilous voyage. However, you know that this is just the beginning. The next chapter of your journey awaits, and you gather your strength and determination to face the upcoming challenges.\
    ",
    options: [

        {
            text: 'Go Back',
            nextText: 6
          },
        

        {
          text: 'Continue',
          nextText: 600
        },
      
       
      ]
},

{
    id:600,
    text: "Once you finally arrive in Greece, hopeful for a new chapter in your journey, you encounter another obstacle. As you make your way through the country, officials stop you and direct you to a crowded refugee camp. Your heart sinks as you realize that you might be stuck there indefinitely, uncertain of when you will be released.\
    Facing this challenge, you are presented with two choices:\
    Choice A: Take matters into your own hands and escape from the camp, risking the unknown but seeking freedom and the ability to continue your journey..\
    Choice B: Stay in the refugee camp and wait for official processing, hoping for a timely release.",
    options: [

        {
            text: 'Choice A (successful)',
            nextText: 8
          },
        

        {
          text: 'Choice B',
          nextText: 420
        },
      
       
      ]
},

{
    id:420,
    text:"Despite your hopes of release, you find yourself trapped in the confines of the refugee camp. Days turn into weeks, and weeks turn into months as you wait for news that never seems to come. The conditions worsen, and hope begins to fade. Resources are low, and tensions rise among the camp's residents. Eventually, the authorities inform you that your asylum request has been denied, and you are to be sent back to Syria. Desperation and disappointment fill your heart as you realize that the dream of a better life and education for Centola will remain unreachable.",
    options: [

        {
            text: 'Restart',
            nextText: -1
          },
        

        {
          text: 'Restart',
          nextText: -1
        },
      
       
      ]
},




{
    id:8,
    text: "In Greece, you navigate the bustling streets and seek out resources to aid your onward journey. With the map as your guide, you make your way through towns and villages, relying on the kindness of strangers for support. You encounter other refugees along the way, each with their own stories of survival and hope.\
\
    Days turn into weeks, and you continue to push forward, overcoming obstacles and challenges with unwavering determination. The journey through Bulgaria and Serbia tests your resolve, but you persevere, fueled by the dream of a better life for Centola and yourself.\
    \
    Finally, you arrive at the border of Hungary. \
    As you stand at the border a new obsticle become clear. Hungarian officials have tightened their grip, refusing entry to anyone without proper documentation. The border guards are attentive, and rumors circulate of severe consequences for those who attempt to cross without permission. \
    You watch the scene, observing the desperate faces of other refugees who have been turned away, their dreams shattered. Fear tightens its hold around your heart, knowing that the path ahead will come with danger and uncertainty.\
    In the midst of this tension, you encounter a government official who claims to have the means to facilitate your entry into Hungary. He assures you that he has the knowledge and connections to bypass the strict controls. But doubts linger. Can you trust him? Will he lead you to safety or deliver you into the hands of authorities?\
    ",
    options: [

        {
            text: 'Go Back',
            nextText: 600
          },
        

        {
          text: 'Continue',
          nextText: 9
        },
      
       
      ]
},
{
    id:9,
    text: "Choice A: Going on your own\
    Driven by a mixture of bravery and desperation, you consider forging ahead without the aid of the government official. The temptation to rely solely on your wits and resourcefulness. You consider evading the authorities, sneaking through hidden paths, and finding your way into Hungary.\
    However, the risks are big. The consequences of getting caught could mean imprisonment, separation from Centola, and the end of your journey toward Austria. The path ahead is dangerous and filled with anticipation. It is a choice that requires great courage, but one that might lead to dire consequences.\
    Choice B: Trusting the government official\
    Despite the doubts nibbling at your conscience, you decide to place your faith in the government official. The thought of Centola's safety drives you to take this risk. You understand that the official's assistance comes at a price of 500 USD but it's a necessary sacrifice.\
    Trusting the official might offer a greater chance of success, ensuring a smoother passage into Hungary and putting Centola's well-being first. But the lingering uncertainty remains. Can the official truly be trusted? Only time will reveal the answer.\
    ",
    options: [

        {
            text: 'Choice A',
            nextText: 100
          },
        

        {
          text: 'Choice B (successful)',
          nextText: 10
        },
      
       
      ]
},

{
    id:100,
    text: "As you take the risk to cross the border into Hungary alone, panic sets in as you realize Centola is struggling to keep up. In the chaos, she is spotted and captured by the border guards. Your heart sinks, knowing you can't continue without her by your side. In a desperate act of love you surrender yourself to the authorities, determined to stay with your sister. You are both sent to a refugee camp, trapped once again in a cycle of uncertainty and longing for freedom. Your dreams of reaching Austria and finding safety fade away, replaced by the grim reality of life in the camp. The days blur together as you cling to the hope of a brighter future, but the path you once envisioned seems lost in the labyrinth of adversity.",
    options: [

        {
            text: 'Restart',
            nextText: -1
          },
        

        {
          text: 'Restart',
          nextText: -1
        },
      
       
      ]
},


{
    id:10,
    text: "With Centola's safety as your priority, you choose to place your trust in the government official. Despite your doubts, you hand over the agreed 500 USD, hoping that this investment will secure your passage into Hungary.\
    The official lead you through hidden paths and avoids the eyes of border guards. Your heart pounds in your chest as you navigate the treacherous terrain, following the official's lead.\
    As you approach the border, a mix of anxiety and anticipation fills you. The official's connections prove valuable as he discreetly communicates with fellow officers, facilitating your passage without arousing suspicion. You catch glimpses of suspicious glances from the guards, but the official's authority seems to have an unspoken power that keeps them at bay.\
    You cross the border into Hungary, a wave of ease washing over you.",
    options: [

        {
            text: 'Go Back',
            nextText: 9
          },
        

        {
          text: 'Continue',
          nextText: 11
        },
      
       
      ]
},

{
    id: 11,
    text: "As you approach the Austrian-Hungarian border, the feeling of finally reaching Austria and finding safety surges within you. You and Centola have come so far, enduring countless obstacles and facing adversity head-on. However, just when you think the worst is behind you, a devastating event unfolds the theft of your belongings!\
    In the chaos of a bustling marketplace near the border, a skilled theif targets you, swiftly snatching your bag containing everything you own. Shock and disbelief wash over you as you frantically search the crowd, but the thief has disappeared, blending into the crowd of people.\
    Feelings of anger and despair threaten to consume you. The stolen bag held not only your identification papers and money but also precious mementos—a family photo, a worn-out map, and tokens of hope from your journey. It feels like a cruel blow, a reminder of how vulnerable you are, even almost having safety and freedom.\
    ",
    options: [

        {
            text: 'Go Back',
            nextText: 10
          },
        

        {
          text: 'Continue to Choices',
          nextText: 12
        },
      
       
      ]
},
{
    id:12,
    text:"You face a choice:\
    Choice A) Accept the loss and continue your journey without your belongings, knowing that they are irretrievable. This option allows you to avoid further risks and delays, focusing solely on reaching Austria.\
    Choice B) Decide to track down the thief and retrieve your stolen belongings, unwilling to accept defeat. This choice leads to a confrontation with the thief, testing your physical and mental strength.",
    options: [

        {
            text: 'Choice A',
            nextText: 900
          },
        

        {
          text: 'Choice B (successful)',
          nextText: 13
        },
      
       
      ]
},

{

id:900,
text: "Devastation washes over you as you realize everything you owned, including your identification, has been stolen. Without any means to prove your identity, seeking asylum becomes an impossible feat. Every door closes, and you find yourself trapped in a world that refuses to acknowledge your existence. With no path forward, you are left with no choice but to accept defeat. Hope slips through your fingers, and you are forced to return to the place you risked everything to escape. The dream of a new beginning crumbles into dust, and the longing for safety remains unfulfilled.",
options: [

    {
        text: 'Restart',
        nextText: -1
      },
    

    {
      text: 'Restart',
      nextText: -1
    },
  
   
  ]

},

{
    id:13,
    text: "driven by a fierce determination to reclaim what was stolen from you, you embark on a desperate search. With Centola at your side, you navigate the streets, questioning locals and following any lead that might help track down the thief. Eventually, your search leads you to a hidden alley where the thief is cornered.\
    With adrenaline coursing through your veins, you confront the thief, demanding the return of your belongings. However, the thief is not willing to lose easily. A fierce struggle occurs, testing your physical strength and willpower. The outcome hangs in the balance as you fight tooth and nail to regain what is rightfully yours.\
    Finally, the combined efforts of your determination and Centola's unwavering loyalty turn the tide. Exhausted but triumphant, you emerge victorious, reclaiming your stolen belongings. The feeling of satisfaction and relief washes over you, reaffirming your strength and the power of your will to overcome any obstacle.\
    With your belongings safely returned, you continue your journey towards Austria, carrying with you not just physical possessions, but also the indomitable spirit that has guided you thus far.",
    options: [

        {
            text: 'Finish!',
            nextText: 14
          },
        

        {
          text: 'Finish!',
          nextText: 14
        },
      
       
      ]
},

{id:14,

    text: "After a difficult journey filled with obstacles, risks, and moments of uncertainty, you finally arrive in Vienna, Austria. With resilience and unwavering determination, you apply for asylum, sharing your story, and seeking refuge. The day comes when you are granted asylum, providing a new beginning and a glimmer of hope for a brighter future. You reflect on the challenges you have faced, the strength you have discovered within yourself, and the resilience that carried you through. With Austria as your new home, you embrace the opportunity to rebuild, to heal, and to thrive, grateful for the safe haven and the chance to start a new life!",
    options: [

        {
            text: 'Restart',
            nextText: -1
          },
        

        {
          text: 'Restart',
          nextText: -1
        },
      
       
      ]

},

]


startGame()
