import ProfileField from './ProfileField';

const ProfileSpouseDetails = () => (
  <div className="text-sm space-y-6">
    <ProfileField label="Salutation*" value="Mr." />
    <ProfileField label="First Name*" value="John" />
    <ProfileField label="last Name*" value="Doe Jr." />
  </div>
);

export default ProfileSpouseDetails;
