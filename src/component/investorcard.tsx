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
        <div className='min-h-[95px] w-full flex flex-col gap-2 border items-center justify-center rounded-xl border-[#BDBDBD] xlarge:text-xl shadow-md px-2 py-4'>
              <div className="text-center">{head}</div>
            <input
                type='text'
                className='text-center w-[99%] border rounded-md border-[#BDBDBD80] shadow-md'
                value={fileName}
                disabled={fl === '0'} // Disable input if fl is 0
                onChange={(e) => setFileName(e.target.value)}
            />
            <div className={`flex items-center ${fl === '0' ? 'flex-start' : 'flex-end'} xlarge:text-lg text-base w-full justify-between`}>
                {fl === '0' ?

                    (<div className='flex justify-between items-center md:max-2xl:w-[45%] sm:w-[50%]'>    
                    <RiDeleteBin5Line className='cursor-pointer text-[#DF4C3F]' onClick={() => setFileName(def)} />
                        <div className="flex justify-center items-center">
                            <HiUpload className='text-[#7F39EB] cursor-pointer w-4 h-4' onClick={handleFileUpload} />
                            <div className=" cursor-pointer max-w-[30px] min-h-[18px] md:max-2xl:block sm:hidden" onClick={handleFileUpload}>Upload</div>
                        </div></div>
                    ) : <div></div>
                }
                <div className='flex gap-2 mr-2 justify-center items-center'>
                    {loading && <AiOutlineLoading3Quarters className='text-[#7F39EB]' />}
                    <div className='flex justify-center items-center '>
                        <GrStatusGood className='text-[#285B52]' />
                        <span className='md:max-2xl:block sm:hidden'>Ready</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investorcard;
