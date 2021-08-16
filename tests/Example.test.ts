import { ethers, waffle } from 'hardhat';
import { Example } from '../typechain';

const { getContractFactory } = ethers;
const { loadFixture } = waffle;

describe('Example', () => {
  const fixture = async () => {
    const factory = await getContractFactory('Example');
    const contract = (await factory.deploy()) as Example;

    return { contract };
  };

  describe('foo', () => {
    it('is not implemented', async () => {
      const { contract } = await loadFixture(fixture);
      await expect(contract.foo()).toBeReverted();
    });
  });

  describe('bar', () => {
    it('returns bar', async () => {
      const { contract } = await loadFixture(fixture);
      await expect(contract.bar()).resolves.toStrictEqual('bar');
    });
  });
});
