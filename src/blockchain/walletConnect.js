export const signInWithMetaMaskHandler = async () => {
    try {
       if (window.ethereum) {
          const accounts = await window.ethereum.request({
             method: 'eth_requestAccounts',
          });
          const account = accounts[0];
          
 
          if (account) {
             return account;
          }
 
          console.error(account);
       } else {
          return {
             walletAddress: null,
             message: 'Metamask not found',
          };
       }
    } catch (err) {
       if (err) {
          console.log(err);
       }
    }
 };
 