import ProfileField from './ProfileField';

const ProfileAdditionalDetails = () => (
  <div className="text-sm space-y-6">
    <ProfileField label="Home Address*" value="Mr." />
    <ProfileField label="Country*" value="John" />
    <ProfileField label="Postal code*" value="Doe Jr." />
    <ProfileField label="Date of birth*" value="johndoe@anyemail.com" />
    <ProfileField label="Gender*" value="johndoe@anyemail.com" />
    <ProfileField label="Marital status*" value="johndoe@anyemail.com" />
  </div>
);

export default ProfileAdditionalDetails;
