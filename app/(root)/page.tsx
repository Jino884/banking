import { HeaderBox } from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = {firstName : "Adrian" , lastName: "JSM", email : 'contact@jsmatery.pro' };
  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and mange your account and transactions efficiently."
              />

              <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
              />
          </header>

          RECENT TRANSACTIONS
        </div>
        <RightSidebar user={loggedIn}
        transaction = {[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500}]}
        />
    </section>
  )}
export default Home