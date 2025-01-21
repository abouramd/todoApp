import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



const UserProfile = ({ name, avatarUrl }: { name: string, avatarUrl: string }) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg p-5 shadow-md">
      <div className="flex flex-col items-center">
        <Avatar className="w-24 h-24 rounded-full mb-4">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>

        <p className="text-xl font-bold">{name}</p>
      </div>
    </div>
  );
};

export default UserProfile;

