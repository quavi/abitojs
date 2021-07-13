import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'

export default class BaseContract {
  web3: Web3
  contract: Contract
  abi: any[]

  constructor(_web3: Web3, _contractAddress: string) {
    this.web3 = _web3
    this.abi = [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bool',
            name: 'enabled',
            type: 'bool',
          },
        ],
        name: 'BuyBackEnabledUpdated',
        type: 'event',
      },
      { anonymous: false, inputs: [], name: 'OnVotingEnabled', type: 'event' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'RewardLiquidityProviders',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokensSwapped',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'ethReceived',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokensIntoLiqudity',
            type: 'uint256',
          },
        ],
        name: 'SwapAndLiquify',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bool',
            name: 'enabled',
            type: 'bool',
          },
        ],
        name: 'SwapAndLiquifyEnabledUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
        ],
        name: 'SwapETHForTokens',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
        ],
        name: 'SwapTokensForETH',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [],
        name: '_liquidityFee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: '_maxTxAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: '_taxFee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'afterPreSale',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'buyBackEnabled',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'buyBackUpperLimitAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'buybackDuration',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'buybackEnabledUntil',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'buybackPercentage',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'deadAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'tAmount', type: 'uint256' }],
        name: 'deliver',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'enableVoting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'estimateBuybackValue',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'excludeFromFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'excludeFromReward',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTime',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getUnlockTime',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'includeInFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'includeInReward',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isBuybackEnabledThroughVoting',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'isExcludedFromFee',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'isExcludedFromReward',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'time', type: 'uint256' }],
        name: 'lock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'marketingAddress',
        outputs: [
          { internalType: 'address payable', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'marketingDivisor',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'minBalanceToAllowVoting',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'minNumberOfHoldersToAllowVoting',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'minimumTokensBeforeSwapAmount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'prepareForPreSale',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'tAmount', type: 'uint256' },
          { internalType: 'bool', name: 'deductTransferFee', type: 'bool' },
        ],
        name: 'reflectionFromToken',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'remainingTimeInBuyback',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'remainingTimeInVoting',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'requiredVotes',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bool', name: '_enabled', type: 'bool' }],
        name: 'setBuyBackEnabled',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
        ],
        name: 'setBuybackDuration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'time', type: 'uint256' }],
        name: 'setBuybackEnabledUntil',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'percentage', type: 'uint256' },
        ],
        name: 'setBuybackPercentage',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'buyBackLimit', type: 'uint256' },
        ],
        name: 'setBuybackUpperLimit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'liquidityFee', type: 'uint256' },
        ],
        name: 'setLiquidityFeePercent',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_marketingAddress',
            type: 'address',
          },
        ],
        name: 'setMarketingAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'divisor', type: 'uint256' }],
        name: 'setMarketingDivisor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'maxTxAmount', type: 'uint256' },
        ],
        name: 'setMaxTxAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'min', type: 'uint256' }],
        name: 'setMinBalancetoAlowVoting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_minimumTokensBeforeSwap',
            type: 'uint256',
          },
        ],
        name: 'setMinimumTokensBeforeSwap',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bool', name: '_enabled', type: 'bool' }],
        name: 'setSwapAndLiquifyEnabled',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'taxFee', type: 'uint256' }],
        name: 'setTaxFeePercent',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'time', type: 'uint256' }],
        name: 'setTimeBetweenEachVote',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'percentage', type: 'uint256' },
        ],
        name: 'setVotePercentageRequired',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'duration', type: 'uint256' },
        ],
        name: 'setVotingDuration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'min', type: 'uint256' }],
        name: 'setminNumberOfHoldersToAllowVoting',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'swapAndLiquifyEnabled',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'rAmount', type: 'uint256' }],
        name: 'tokenFromReflection',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalFees',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'uniswapV2Pair',
        outputs: [
          {
            internalType: 'contract IUniswapV2Pair',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'uniswapV2Router',
        outputs: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'unlock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'vote',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'votePercentageRequired',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'votersCount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'votesCount',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'votesTime',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'votingDuration',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'votingStart',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ]
    this.contract = new _web3.eth.Contract(this.abi, _contractAddress)
  }

  _liquidityFee() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods._liquidityFee().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  _maxTxAmount() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods._maxTxAmount().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  _taxFee() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods._taxFee().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  allowance(owner: string, spender: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.allowance(owner, spender).call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  balanceOf(account: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.balanceOf(account).call())
      } catch (error) {
        reject(error)
      }
    })
  }

  buyBackEnabled() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.buyBackEnabled().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  buyBackUpperLimitAmount() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.buyBackUpperLimitAmount().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  buybackDuration() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.buybackDuration().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  buybackEnabledUntil() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.buybackEnabledUntil().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  buybackPercentage() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.buybackPercentage().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  deadAddress() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.deadAddress().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  estimateBuybackValue(amount: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.estimateBuybackValue(amount).call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  getTime() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.getTime().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  getUnlockTime() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.getUnlockTime().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  isBuybackEnabledThroughVoting() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.isBuybackEnabledThroughVoting().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  isExcludedFromFee(account: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.isExcludedFromFee(account).call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  isExcludedFromReward(account: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.isExcludedFromReward(account).call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  marketingAddress() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.marketingAddress().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  marketingDivisor() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.marketingDivisor().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  minBalanceToAllowVoting() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.minBalanceToAllowVoting().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  minNumberOfHoldersToAllowVoting() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.minNumberOfHoldersToAllowVoting().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  minimumTokensBeforeSwapAmount() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.minimumTokensBeforeSwapAmount().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  owner() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.owner().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  reflectionFromToken(tAmount: string, deductTransferFee: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods
            .reflectionFromToken(tAmount, deductTransferFee)
            .call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  remainingTimeInBuyback() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.remainingTimeInBuyback().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  remainingTimeInVoting() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.remainingTimeInVoting().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  requiredVotes() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.requiredVotes().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  swapAndLiquifyEnabled() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.swapAndLiquifyEnabled().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  tokenFromReflection(rAmount: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.tokenFromReflection(rAmount).call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  totalFees() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.totalFees().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  totalSupply() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.totalSupply().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  uniswapV2Pair() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.uniswapV2Pair().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  uniswapV2Router() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.uniswapV2Router().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  votePercentageRequired() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(
          await this.contract.methods.votePercentageRequired().call()
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  votersCount() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.votersCount().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  votesCount() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.votesCount().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  votesTime(address: string) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.votesTime(address).call())
      } catch (error) {
        reject(error)
      }
    })
  }

  votingDuration() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.votingDuration().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  votingStart() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        return resolve(await this.contract.methods.votingStart().call())
      } catch (error) {
        reject(error)
      }
    })
  }

  account() {
    return new Promise(async (resolve, reject) => {
      let accounts = await this.web3.eth.getAccounts()
      resolve(accounts[0])
    })
  }

  sendTransaction(tx: any, value?: string) {
    return new Promise<void>(async (resolve, reject) => {
      try {
        let opts = {
          from: await this.account(),
        }
        if (value) {
          //@ts-ignore
          opts.value = this.web3.utils.toWei(value.toString(), 'ether')
        }
        let gas = await tx.estimateGas(opts)
        let gasPrice = await this.web3.eth.getGasPrice()

        //@ts-ignore
        opts.gas = gas
        //@ts-ignore
        opts.gasPrice = gasPrice
        await tx.send(opts)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}
