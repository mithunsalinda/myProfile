type ProfileFieldProps = {
  label: string;
  value: string;
};

const ProfileField = ({ label, value }: ProfileFieldProps) => (
  <div>
    <div className="font-semibold">{label}</div>
    <div className="text-gray-800">{value}</div>
  </div>
);

export default ProfileField;
