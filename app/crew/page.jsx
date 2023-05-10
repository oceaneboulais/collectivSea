'use client'

const people = [
  {
    name: 'Océane Boulais',
    role: 'Captain and Co-founder',
    imageUrl:
      './crew/oceane.JPG',
    bio: `Océane helps guide the company compass towards our North Star mission and supports the crew as we set sail into uncharted territory of augmenting the environmental education industry with modular immersive experiences. 
    After cutting her engineering teeth at Facebook and Universal Creative Engineering, she dove head first into the viscid space between innovative technology development and sustainable ocean conservancy at the 
    MIT Media Lab. For a holistic perspective of ocean science practiced on a national scale, Océane joined NOAA whilst digitally nomadic from a van she co- built in her dad’s garage.
    
    When the sun is out, you’ll find Océane on or in the waves - sailing, diving, and longboarding. If her toes aren’t in the sand, she’s listening to coral reef soundscapes as a researcher at Scripps Institution of Oceanography or creating something thalassic with her hands like a painting or sculpture.
    `,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lorea Dandoy',
    role: 'First Mate & Co-Founder',
    imageUrl:
      './crew/lorea.JPG',
    bio: `While our Captain looks to the skies at our North Star, Lorea keeps an eye on the horizon and tradewinds to ensure smooth sailing. She balances storytelling and strategy to dream up experiences that elevate science communication to new realms.

Anchored in a psychology context, she paved her path in the world of experiential marketing at GPJ, developing multimedia experiences for tech clients like IBM. Lorea comes with experience building worlds with a myriad of mediums: film, gallery exhibits, escape rooms, AR and VR. On deck, she’s threading her world-building chops with marine conservation while wrapping up at Scripps Institution of Oceanography in the interdisciplinary Marine Biodiversity and Conservation program.

Lorea feels most in tune with the ocean when fully submerged, through scuba and freediving, often behind a camera. Sharing stories about marine wildlife, psychology of dreams, and offbeat destinations are a few ways to get her out of her shell.
`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Niv Anidjar',
    role: 'Acoustic Engineer & Co-Founder',
    imageUrl:
      './crew/niv.JPG',
    bio: `Niv is the creative splash behind the acoustic experiences at CollectivSea. Always on the hunt for found sound, they’re constantly listening for ways to link their thirst for frequencies with scientific expertise. Through their research, they investigate the complex interactions between these physical processes and the ecosystems they affect.

Born with a passion for the ocean, Niv pursued a Bachelor of Science degree in Oceanic and Atmospheric Science. It was in the realm of Physical Oceanography that they found their true calling, leading them to pursue a PhD focused on estuaries and coastal dynamics. Outside of their academic pursuits, Niv has always been drawn to music, specifically playing the piano and saxophone, and exploring music production and sound design. Their auditory curiosity and expertise provide a unique lens through which to view the world, linking their creative endeavors with their scientific training.

When not immersed in research or music, Niv can often be found watching the sunset from coastal bluffs, listening to the waves crash against the shore.
`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'JP Whitaker',
    role: '3D Web Engineer & Co-Founder',
    imageUrl:
      './crew/jp.JPG',
    bio: `JP is a whimsical web generator and polygon mage who loves telling stories anchored in education through screen-sized portals that connect humans to one another. 

JP joins CollectivSea with a myriad of experiences from the startup realm, developing fullstack pipelines for companies such as Boatbound, Podcat, and Ubiq Security, as well as working in digital marketing at Wall-to-Wall Studios and Oceanit Laboratories. 

If the wind is fair, you can find JP sailing with friends on his hobie cat in Kaneohe Bay off eastern O’ahu. Otherwise, catch JP trying new recipes in his kitchen or hiking through the jungle.
`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },

]

export default function Page() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Meet our crew</h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p> */}
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none bg-white p-8 rounded-2xl"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover max-h-72" src={person.imageUrl} alt="" />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </>
  )
}
