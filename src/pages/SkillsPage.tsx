import React from 'react';
import Skills from '../components/Skills';

const SkillsPage = () => {
  const [currentRole] = React.useState<'cloud' | 'software'>('cloud');

  return (
    <div className="py-12">
      <div className="flex flex-col items-center mb-12">
        {/* <RoleSwitcher currentRole={currentRole} setCurrentRole={setCurrentRole} /> */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8">
          {'Software Engineering Skills'}
        </h1>
      </div>
      <Skills currentRole={currentRole} />
    </div>
  );
};

export default SkillsPage;