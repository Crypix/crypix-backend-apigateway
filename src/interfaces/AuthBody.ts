import { UserWallet } from './UserWallet';

interface UserAuthBody {
	wallet: UserWallet | null;
}

export type { UserAuthBody };
