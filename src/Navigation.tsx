import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import {SendOneLamportToRandomAddress} from './SendOneLamportToRandomAddress'
import React, { FC } from 'react';

const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <nav>
            <h1>Solana Starter Appp</h1>
            <div>
                <WalletMultiButton />
                
                {wallet && <WalletDisconnectButton />}
            </div>
            <div>
              
                <SendOneLamportToRandomAddress />
                
              
            </div>
        </nav>
    );
};

export default Navigation;
