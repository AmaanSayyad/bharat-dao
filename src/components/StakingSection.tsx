import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calculator, Clock, Lock, TrendingUp } from "lucide-react";

interface StakingPlan {
  id: string;
  name: string;
  duration: number; // in days
  apy: number;
  minAmount: number;
  maxAmount: number;
  totalStaked: number;
  maxPoolSize: number;
  lockPeriod: number; // in days
  earlyWithdrawalFee: number; // percentage
}

const StakingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('flexible');
  const [stakingAmount, setStakingAmount] = useState<number>(1000000);
  const [stakingDuration, setStakingDuration] = useState<number>(30);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);

  const stakingPlans: StakingPlan[] = [
    {
      id: 'flexible',
      name: 'Flexible Staking',
      duration: 0, // Flexible
      apy: 12,
      minAmount: 100000,
      maxAmount: 10000000,
      totalStaked: 0,
      maxPoolSize: 100000000,
      lockPeriod: 0,
      earlyWithdrawalFee: 0
    },
    {
      id: 'medium',
      name: 'Medium Term',
      duration: 90, // 3 months
      apy: 24,
      minAmount: 500000,
      maxAmount: 50000000,
      totalStaked: 0,
      maxPoolSize: 200000000,
      lockPeriod: 30,
      earlyWithdrawalFee: 5
    },
    {
      id: 'long',
      name: 'Long Term',
      duration: 365, // 1 year
      apy: 42,
      minAmount: 1000000,
      maxAmount: 100000000,
      totalStaked: 0,
      maxPoolSize: 300000000,
      lockPeriod: 90,
      earlyWithdrawalFee: 10
    }
  ];

  const getCurrentPlan = () => {
    return stakingPlans.find(plan => plan.id === selectedPlan) || stakingPlans[0];
  };

  const calculateRewards = () => {
    const plan = getCurrentPlan();
    const duration = plan.duration === 0 ? stakingDuration : plan.duration;
    
    // Calculate APY based on the duration (pro-rated for periods less than a year)
    const annualRate = plan.apy / 100;
    
    // Daily compound interest calculation
    const dailyRate = annualRate / 365;
    const rewards = stakingAmount * Math.pow(1 + dailyRate, duration) - stakingAmount;
    
    setEstimatedRewards(rewards);
  };

  useEffect(() => {
    calculateRewards();
  }, [selectedPlan, stakingAmount, stakingDuration]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(num);
  };

  const getPoolFilledPercentage = (plan: StakingPlan) => {
    return (plan.totalStaked / plan.maxPoolSize) * 100;
  };

  return (
    <section className="py-16 bg-gray-50 relative" id="staking">
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8 animate-on-scroll">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">12</span>
            <span>Staking</span>
          </div>
        </div>
        
        <h2 className="section-title mb-6 animate-on-scroll">Stake $BDAO, <span className="text-pulse-500">Earn Rewards</span></h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-12 animate-on-scroll">
          Lock your $BDAO tokens and earn passive income with our staking program. 
          Choose from flexible, medium-term, or long-term staking options with competitive APYs.
        </p>
        
        {/* Staking Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-on-scroll">
          {stakingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`glass-card p-6 rounded-xl transition-all duration-300 ${selectedPlan === plan.id ? 'border-2 border-pulse-500 shadow-lg' : 'border border-gray-200'}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {plan.duration === 0 ? 'No lock period' : `${plan.duration} days lock`}
                  </p>
                </div>
                <div className="bg-pulse-50 text-pulse-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {plan.apy}% APY
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Min. Stake</span>
                  <span className="font-medium">{formatNumber(plan.minAmount)} $BDAO</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Max. Stake</span>
                  <span className="font-medium">{formatNumber(plan.maxAmount)} $BDAO</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Lock Period</span>
                  <span className="font-medium">{plan.lockPeriod} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Early Withdrawal Fee</span>
                  <span className="font-medium">{plan.earlyWithdrawalFee}%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Pool Filled</span>
                  <span className="font-medium">{formatNumber(getPoolFilledPercentage(plan))}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-pulse-500 h-2 rounded-full" 
                    style={{ width: `${getPoolFilledPercentage(plan)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1 text-gray-500">
                  <span>{formatNumber(plan.totalStaked)} $BDAO</span>
                  <span>{formatNumber(plan.maxPoolSize)} $BDAO</span>
                </div>
              </div>
              
              <Button 
                className={`w-full ${selectedPlan === plan.id ? 'bg-pulse-600 hover:bg-pulse-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Staking Calculator */}
        <div className="glass-card p-8 mb-16 animate-on-scroll">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center mr-4 text-white">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-bold">Rewards Calculator</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Selected Plan</label>
                <div className="flex items-center p-4 bg-pulse-50 rounded-lg">
                  <div className="w-10 h-10 bg-pulse-500 rounded-full flex items-center justify-center text-white mr-3">
                    {getCurrentPlan().id === 'flexible' && <Clock size={20} />}
                    {getCurrentPlan().id === 'medium' && <Lock size={20} />}
                    {getCurrentPlan().id === 'long' && <TrendingUp size={20} />}
                  </div>
                  <div>
                    <div className="font-semibold">{getCurrentPlan().name}</div>
                    <div className="text-sm text-pulse-700">{getCurrentPlan().apy}% APY</div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Amount to Stake ($BDAO)</label>
                <div className="flex">
                  <input
                    type="number"
                    id="amount"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500"
                    min={getCurrentPlan().minAmount}
                    max={getCurrentPlan().maxAmount}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Min: {formatNumber(getCurrentPlan().minAmount)} $BDAO</span>
                  <span>Max: {formatNumber(getCurrentPlan().maxAmount)} $BDAO</span>
                </div>
              </div>
              
              {getCurrentPlan().id === 'flexible' && (
                <div>
                  <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">Staking Duration (days)</label>
                  <div className="flex">
                    <input
                      type="number"
                      id="duration"
                      value={stakingDuration}
                      onChange={(e) => setStakingDuration(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500"
                      min={1}
                      max={365}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Min: 1 day</span>
                    <span>Max: 365 days</span>
                  </div>
                </div>
              )}
              
              <Button 
                className="w-full bg-pulse-600 hover:bg-pulse-700 text-white py-3"
                onClick={calculateRewards}
              >
                Calculate Rewards
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Estimated Returns</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Initial Investment</span>
                  <span className="font-medium">{formatNumber(stakingAmount)} $BDAO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Staking Period</span>
                  <span className="font-medium">
                    {getCurrentPlan().duration === 0 ? stakingDuration : getCurrentPlan().duration} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">APY</span>
                  <span className="font-medium text-pulse-600">{getCurrentPlan().apy}%</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Rewards</span>
                    <span className="font-medium text-green-600">+{formatNumber(estimatedRewards)} $BDAO</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">Total Value After Staking</span>
                    <span className="font-bold">{formatNumber(stakingAmount + estimatedRewards)} $BDAO</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Profit Breakdown</div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(estimatedRewards / (stakingAmount + estimatedRewards)) * 100}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">
                    +{((estimatedRewards / stakingAmount) * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Staking Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-on-scroll">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center text-pulse-600 mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Competitive APY</h3>
            <p className="text-gray-600">
              Earn up to 42% APY on your $BDAO tokens with our long-term staking option.
              Our staking rewards are among the highest in the industry.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center text-pulse-600 mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
            <p className="text-gray-600">
              Choose from flexible staking with no lock period, medium-term (90 days),
              or long-term (365 days) options to suit your investment strategy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center text-pulse-600 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Compound Rewards</h3>
            <p className="text-gray-600">
              Rewards are calculated and compounded daily, maximizing your returns
              over time and accelerating your wealth accumulation.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Button 
            className="bg-pulse-600 hover:bg-pulse-700 text-white py-3 px-8 text-lg font-medium rounded-lg inline-flex items-center"
          >
            Connect Wallet to Stake
            <ArrowRight className="ml-2" />
          </Button>
          <p className="mt-4 text-sm text-gray-1100">
          ⚠️ Note: Staking feature will be available after the official launch of our staking feature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StakingSection; 