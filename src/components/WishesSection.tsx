import { useState } from 'react';
import FriendCard from './FriendCard';
import VideoModal from './VideoModal';

// Import friend images
import armenImage from '@/assets/a.jpeg';
import liloImage from '@/assets/l.jpeg';
import susoImage from '@/assets/s.jpeg';
import dinaImage from '@/assets/d`.png';
import hrachImage from '@/assets/h.jpeg';
import milenImage from '@/assets/m.jpeg';
import vid from '@/assets/Запись экрана 2025-03-19 в 12.48.32.mov'

interface Friend {
  name: string;
  image: string;
  videoUrl?: string;
}

const friends: Friend[] = [
  { name: 'Armen', image: armenImage,videoUrl:'https://youtu.be/tczxKNFEJg4?si=_dsVUPUXfHCPwNXC'},
  { name: 'Lilo', image: liloImage,videoUrl:'https://www.youtube.com/watch?v=Suqyb-QGkI0&list=RDSuqyb-QGkI0&start_radio=1' },
  { name: 'Susik', image: susoImage,videoUrl:'https://www.youtube.com/watch?v=Suqyb-QGkI0&list=RDSuqyb-QGkI0&start_radio=1' },
  { name: 'Dina', image: dinaImage,videoUrl:'https://youtu.be/EajjSNyaOIg?si=WOVFfaqjfI1ZYLdB' },
  { name: 'Hrach', image: hrachImage,videoUrl:'https://www.youtube.com/watch?v=Suqyb-QGkI0&list=RDSuqyb-QGkI0&start_radio=1' },
  { name: 'Milen 💕 💕 💕', image: milenImage ,videoUrl:'https://www.youtube.com/watch?v=Suqyb-QGkI0&list=RDSuqyb-QGkI0&start_radio=1'},
];

const WishesSection = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend);
    console.log(friend,'aaa')
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFriend(null);
  };

  return (
    <section id="wishes-section" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wishes from Friends ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Նարս երկար բարակ տեքստեր չենք գրում բենզինցիները քո համար շնորհավորանքներեն պատրաստել արևս <br/> իջի ներքև նայի, ավելի ճիշտ լսի, ավելի ճիշտ համ նայի համ լսի💕
          </p>
        </div>

        {/* Friends grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {friends.map((friend, index) => (
            <div
              key={friend.name}
              className="animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + index * 0.2}s`,
              }}
            >
              <FriendCard
                name={friend.name}
                image={friend.image}
                onClick={() => handleFriendClick(friend)}
              />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16 gap-8 text-4xl">
          {['🎈', '🎉', '🎂', '🎁', '✨', '💕'].map((emoji, index) => (
            <span
              key={index}
              className="animate-bounce-gentle opacity-60"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedFriend && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          friendName={selectedFriend.name}
          videoUrl={selectedFriend.videoUrl}
        />
      )}
    </section>
  );
};

export default WishesSection;
