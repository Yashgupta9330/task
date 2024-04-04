import React, { useState, ChangeEvent } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiUpload } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";

interface InvestorCardProps {
    head: string;
    def: string;
    fl: string;
    className?: string;
}

const Investorcard: React.FC<InvestorCardProps> = ({ head, def, fl }) => {
    const [fileName, setFileName] = useState<string>(def);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileUpload = () => {
        setLoading(true);
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', handleFileListener);
        input.click();
    };

    const handleFileListener = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]){
            const file = target.files[0];
            setFileName(file.name);
            setLoading(false);
        }
    };

    return (
        <div className='min-h-[95px] w-full flex flex-col gap-2 border items-center justify-center rounded-xl border-[#BDBDBD] xlarge:text-3xl shadow-md sm:text-base px-2 py-4 xlarge:h-full '>
              <span className="text-center text-base xlarge:text-3xl">{head}</span>
            <input
                type='text'
                className='text-center w-[99%] text-sm border rounded-md border-[#BDBDBD80] shadow-md xlarge:text-2xl'
                value={fileName}
                disabled={fl === '0'} // Disable input if fl is 0
                onChange={(e) => setFileName(e.target.value)}
            />
            <div className={`flex items-center ${fl === '0' ? 'flex-start' : 'flex-end'} xlarge:text-3xl text-sm w-full justify-between`}>
                {fl === '0' ?

                    (<div className='flex justify-around items-center md:max-2xl:w-[45%] w-[50%]'>    
                    <RiDeleteBin5Line className='cursor-pointer text-[#DF4C3F]' onClick={() => setFileName(def)} />
                        <div className="flex justify-center items-center">
                            <HiUpload className='text-[#7F39EB] cursor-pointer w-4 h-4' onClick={handleFileUpload} />
                            <span className=" cursor-pointer max-w-[30px] min-h-[18px] md:max-2xl:block " onClick={handleFileUpload}>Upload</span>
                        </div></div>
                    ) : <div></div>
                }
                <div className='flex gap-2 mr-2 justify-center items-center'>
                    {loading && <AiOutlineLoading3Quarters className='text-[#7F39EB]' />}
                    <div className='flex justify-center items-center '>
                        <GrStatusGood className='text-[#285B52]' />
                        <span className='md:max-2xl:block'>Ready</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investorcard;
