import { ChangeEvent, FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextInputArea from './TextInputArea';

// Profile の描画に使うcomponent をimport しておく
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

type GitHubProfile = {
    login: string;
    name: string;
    avatar_url: string;
};

const Profile: FC = () => {
    const [userName, setUserName] = useState('');
    const [profile, setProfile] = useState<GitHubProfile | undefined>(undefined);


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const onSubmit = async () => {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        // 型注釈でdata の型をGitHubProfile だと宣言する
        const data: GitHubProfile = await response.json();

        if (response.ok) {
            // 取得したdata をprofile にset する
            setProfile(data);
        }
    };
    return (
        <Stack spacing={1}>
            {/* profile の値がtruthy な場合に　<Card /> をrender する */}
            {profile && (
                <Card
                    sx={{
                        width: 300,
                    }}
                >
                    <CardHeader
                        avatar={<Avatar src={profile.avatar_url} />}
                        title={profile.name}
                        subheader={profile.login}
                    />
                </Card>
            )}
            <TextInputArea value={userName} onChange={onChange} onSubmit={onSubmit} />
        </Stack>
    );
};

export default Profile;