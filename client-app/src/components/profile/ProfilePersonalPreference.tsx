import ProfileField from './ProfileField';

const ProfilePersonalPreference = () => (
  <div className="text-sm space-y-6">
    <ProfileField label="Hobbies and interests*" value="Mr." />
    <ProfileField label="Favorite sports(s)*" value="John" />
    <ProfileField label="Preferred music genre(s)*" value="Doe Jr." />
    <ProfileField label="Preferred movie/TV show(s)*" value="Doe Jr." />
  </div>
);

export default ProfilePersonalPreference;
