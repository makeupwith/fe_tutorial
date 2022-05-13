import { ChangeEvent, FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextInputArea from './TextInputArea';

// Profile の描画に使うcomponent をimport しておく
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { CardActionArea } from '@mui/material';

type GitHubProfile = {
	login: string;
	name: string;
	avatar_url: string;
};

const Profile: FC = () => {
	const [userName, setUserName] = useState('');
	const [profile, setProfile] = useState<GitHubProfile | undefined>(undefined);
	const [isFlag, setIsFlag] = useState<boolean>(false);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const onSubmit = async () => {
		const response = await fetch(`https://api.github.com/users/${userName}`);

		// 型注釈でdata の型をGitHubProfile だと宣言する
		const data: GitHubProfile = await response.json();

		if (response.ok) {
			setIsFlag(true);
			// 取得したdata をprofile にset する
			setProfile(data);
		} else {
			setProfile(undefined);
		}
	};

	return (
		<Stack spacing={1}>
			{/* profile の値がtruthy な場合に　<Card /> をrender する */}
			{profile ?
				<Card sx={{ width: 300 }}>
					<CardActionArea href={profile.avatar_url}>
						<CardHeader
							avatar={<Avatar src={profile.avatar_url} />}
							title={profile.name}
							subheader={profile.login}
						/>
					</CardActionArea>
				</Card>
				: (isFlag && <div>ユーザーの情報が取得できませんでした</div>)
			}
			<TextInputArea value={userName} onChange={onChange} onSubmit={onSubmit} />
		</Stack >
	);
};

export default Profile;