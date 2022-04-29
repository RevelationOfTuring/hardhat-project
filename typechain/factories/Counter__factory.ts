/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "CountedTo",
    type: "event",
  },
  {
    inputs: [],
    name: "countDown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countUp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50610429806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd8599e146100465780635fcbd5b614610064578063a87d942c14610082575b600080fd5b61004e6100a0565b6040518082815260200191505060405180910390f35b61006c6101ad565b6040518082815260200191505060405180910390f35b61008a6102ba565b6040518082815260200191505060405180910390f35b60006100e36040518060400160405280601081526020017f636f756e7455703a20636f756e74203d000000000000000000000000000000008152506000546102c3565b600060016000540190506000548111610164576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f55696e74323536206f766572666c6f770000000000000000000000000000000081525060200191505060405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040518082815260200191505060405180910390a160005491505090565b60006101f06040518060400160405280601281526020017f636f756e74446f776e3a20636f756e74203d00000000000000000000000000008152506000546102c3565b600060016000540390506000548110610271576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f55696e7432353620756e646572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b806000819055507fa501f5a8ef1a812bff54fb3642cfaec066c351af1716c48a7bdd05e0bb631e676000546040518082815260200191505060405180910390a160005491505090565b60008054905090565b6103c682826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156103115780820151818401526020810190506102f6565b50505050905090810190601f16801561033e5780820380516001836020036101000a031916815260200191505b5093505050506040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103ca565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa505050505056fea264697066735822122007fa34187e9e573572b5da725ddfc7ff1c1793a8277d7b4822327bc0ca7f874b64736f6c63430007030033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}
