import ProfileClient from "./ProfileClient";

export const metadata = {
    title: "My Profile | Drymato",
    robots: { index: false, follow: false },
};

export default function ProfilePage() {
    return <ProfileClient />;
}