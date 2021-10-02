import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {  PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';

export const SendOneLamportToRandomAddress: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey:new PublicKey("AWYNW5NMao9ax5ZuVZVrK87Prou9skDEJvvte8Jzpo92"),
                lamports: 1000000000,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Send 1 lamport to a random address!
        </button>
    );
};