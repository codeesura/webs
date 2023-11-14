import React from 'react'
import Card3 from './Card3';
import CardTilt from './Card';
import Card4 from './Card4';
import Spotlight, { SpotlightCard } from '@/components/spotlight';
import Image from 'next/image';
import Card5 from './Card5';
import Card6 from './Card6';
import Card8 from './Card8';
import Stats from './Stats';

const SeconfSection = () => {
  return (
    <div>


<div className='mt-32'>
            <Stats/>
          </div>
          <div className='mt-32'>
            <Card6/>
          </div>



            <div>
            <Spotlight className="max-w-sm mx-auto grid gap-3 lg:grid-cols-4 items-start lg:max-w-none group  mt-32">
              
              {/* Card #1 */}
              <SpotlightCard className="lg:col-span-1">
                <div className="relative h-full p-6 pb-8 rounded-[inherit] z-20 overflow-hidden" style={{ backgroundColor: '#232323' }}>
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]" style={{ backgroundColor: '#232323' }}></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full " aria-hidden="true" style={{ backgroundColor: '#232323' }}></div>
                      <Image className="inline-flex" src={'/shield-green.png'} width={64} height={64} alt="Card 01" />

                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Multi-Wallet Transfer in One Go</h2>
                      <p className="text-sm text-slate1000">Bridge assets from a single wallet to multiple destinations in one transaction. Simplify complex transfers and send assets to multiple recipients across various networks with ease.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
                  {/* Card #2 */}
                  <SpotlightCard>
                <div className="relative h-full p-6 pb-8 rounded-[inherit] z-20 overflow-hidden" style={{ backgroundColor: '#232323' }}>
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]" style={{ backgroundColor: '#232323' }}></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full " aria-hidden="true" style={{ backgroundColor: '#232323' }}></div>
                      <Image className="inline-flex" src={'/timer.png'} width={64} height={64} alt="Card 01" />
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Scheduled Bridging</h2>
                      <p className="text-sm text-slate1000">Set your assets to bridge at the exact time you choose. Plan your transactions with flexible scheduling options and execute them automatically at the designated time.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
                  {/* Card #3 */}
              <SpotlightCard>
                <div className="relative h-full p-6 pb-8 rounded-[inherit] z-20 overflow-hidden" style={{ backgroundColor: '#232323' }}>
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]" style={{ backgroundColor: '#232323' }}></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full " aria-hidden="true" style={{ backgroundColor: '#232323' }}></div>
                      <Image className="inline-flex" src={'/multi.png'} width={64} height={64} alt="Card 01" />
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Secured Transactions</h2>
                      <p className="text-sm text-slate1000">Our platform ensures the security of your transactions through robust encryption. Rest assured, your bridging activities are protected and private at every juncture.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="lg:col-span-1">
                <div className="relative h-full p-6 pb-8 rounded-[inherit] z-20 overflow-hidden" style={{ backgroundColor: '#232323' }}>
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]" style={{ backgroundColor: '#232323' }}></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full " aria-hidden="true" style={{ backgroundColor: '#232323' }}></div>
                      <div className="relative inline-flex z-10">
                        <Image className="inline-flex" src={'/Data_interconnected_symbol.png'} width={64} height={64} alt="Card 01" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">Privacy-Centric Bridging</h2>
                      <p className="text-sm text-slate1000">Our platform ensures the utmost privacy for your transactions. Advanced encryption maintains complete anonymity and confidentiality for your asset transfers.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              </Spotlight>
            </div>


    </div>
  )
}

export default SeconfSection