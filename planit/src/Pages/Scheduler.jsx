import React, { useEffect, useState } from 'react';
import Dropdown from '../Components/Dropdown';
import schedule from '../schedule';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const hrsarr = [];
const minsarr = [];

for (let i = 0; i <= 23; i++) {
  hrsarr.push(i);
}

for (let i = 0; i <= 59; i++) {
  minsarr.push(i);
}

const Scheduler = () => {
  const [boundHrs1, setBoundHrs1] = useState('');
  const [boundHrs2, setBoundHrs2] = useState('');
  const [boundMins1, setBoundMins1] = useState('');
  const [boundMins2, setBoundMins2] = useState('');
  const [bounds1, setBounds1] = useState([]);
  const [isAdding1, setIsAdding1] = useState(false);
  const [times1, setTimes1] = useState([]);
  const [hrsFrom1, setHrsFrom1] = useState();
  const [minsFrom1, setMinsFrom1] = useState();
  const [hrsTo1, setHrsTo1] = useState();
  const [minsTo1, setMinsTo1] = useState();

  const [boundHrs3, setBoundHrs3] = useState('');
  const [boundHrs4, setBoundHrs4] = useState('');
  const [boundMins3, setBoundMins3] = useState('');
  const [boundMins4, setBoundMins4] = useState('');
  const [bounds2, setBounds2] = useState([]);
  const [isAdding2, setIsAdding2] = useState(false);
  const [times2, setTimes2] = useState([]);
  const [hrsFrom2, setHrsFrom2] = useState();
  const [minsFrom2, setMinsFrom2] = useState();
  const [hrsTo2, setHrsTo2] = useState();
  const [minsTo2, setMinsTo2] = useState();

  const [time, setTime] = useState();
  const [generatedSlots, setGeneratedSlots] = useState([]);

  useEffect(() => {
    setBounds1([
      `${boundHrs1}:${boundMins1.toString().padStart(2, '0')}`,
      `${boundHrs2}:${boundMins2.toString().padStart(2, '0')}`,
    ]);
  }, [boundHrs1, boundHrs2, boundMins1, boundMins2]);

  useEffect(() => {
    setBounds2([
      `${boundHrs3}:${boundMins3.toString().padStart(2, '0')}`,
      `${boundHrs4}:${boundMins4.toString().padStart(2, '0')}`,
    ]);
  }, [boundHrs3, boundHrs4, boundMins3, boundMins4]);

  const handleAdd1 = () => {
    setIsAdding1(true);
  };

  const handleSave1 = (val) => {
    setTimes1([...times1, val]);
  };

  const handleAdd2 = () => {
    setIsAdding2(true);
  };

  const handleSave2 = (val) => {
    setTimes2([...times2, val]);
  };

  console.log (times1)
  console.log (times2)

  console.log (generatedSlots)

  const generateSlots = () => {
    const times1Copy = JSON.parse(JSON.stringify(times1));
    const times2Copy = JSON.parse(JSON.stringify(times2));
    const slots = schedule(times1Copy, times2Copy, bounds1, bounds2, time);
    setGeneratedSlots(slots)
  };

  return (
    <div className="container mx-auto md:px-36 md:py-5 sm:px-16 sm:py-4 px-8 py-2 relative">
      <div className="flex w-full justify-between items-center z-30">
        <Link to="/">
        <img src={logo} alt="Logo" className='h-20 w-40' />
        </Link>
      </div>
      <div className='w-full flex flex-col items-center sm:gap-20 gap-7 text-center text-gray-600'>
        <div className='flex gap-10 items-center mb-5 self-start sm:ml-52'>
          <h1 className='sm:text-xl text-sm font-medium'>Enter number of minutes: </h1>
          <input
            type="number"
            className="p-1 text-lg text-right border-b w-20 focus:border-b-slate-500 border-gray-400"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        <div className='bg-slate-50 sm:p-10 p-4 rounded-xl shadow-2xl border border-gray-200 sm:w-4/6 w-full text-gray-600'>

          <h1 className="sm:text-4xl text-2xl font-bold text-blue-500 text-center mb-5">Your Details</h1>
          <h1 className="sm:text-xl text-lg font-bold">Please enter the Bound Times:</h1>
          <h1 className="sm:text-lg text-md mt-3">From:</h1>
          <Dropdown unit="Hours" arr={hrsarr} setUnit={setBoundHrs1} value={boundHrs1} />
          <Dropdown unit="Minutes" arr={minsarr} setUnit={setBoundMins1} value={boundMins1} />
          <h1 className="sm:text-lg text-md mt-3">To:</h1>
          <Dropdown unit="Hours" arr={hrsarr} setUnit={setBoundHrs2} value={boundHrs2} />
          <Dropdown unit="Minutes" arr={minsarr} setUnit={setBoundMins2} value={boundMins2} />


          {times1.length > 0 ? (
            <div className="my-4">
              <h1 className='font-bold sm:text-lg text-md'>You have meetings from: </h1>
              {times1.map((time) => (
                <div key={time} className="text-lg font-bold">
                  {time[0]} To {time[1]}
                </div>
              ))}
            </div>
          ) : (
            <h1 className='my-4 text-green-400 font-bold sm:text-lg text-sm'>
              You have no meetings today! Enjoy :)
            </h1>
          )}

          <div>
            <button
              className="px-4 py-2 mt-2 outline-blue-500 outline-2 rounded-lg text-blue-500 outline-dashed sm:text-4xl text-2xl font-normal hover:bg-blue-600 hover:outline-none hover:text-white transition-all duration-300"
              onClick={handleAdd1}
            >
              +
            </button>
          </div>

          {isAdding1 && (
            <div className="my-4">
              <h1 className="text-lg font-bold">From:</h1>
              <Dropdown unit="Hours" arr={hrsarr} setUnit={setHrsFrom1} />
              <Dropdown unit="Minutes" arr={minsarr} setUnit={setMinsFrom1} />
              <h1 className="text-lg font-bold">To:</h1>
              <Dropdown unit="Hours" arr={hrsarr} setUnit={setHrsTo1} />
              <Dropdown unit="Minutes" arr={minsarr} setUnit={setMinsTo1} />
              <div>


                <button
                  className="px-4 py-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => {
                    const val = [`${hrsFrom1}:${minsFrom1.toString().padStart(2, '0')}`, `${hrsTo1}:${minsTo1.toString().padStart(2, '0')}`];
                    handleSave1(val);
                    setIsAdding1(!isAdding1);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

        </div>

        <div className='bg-slate-50 sm:p-10 p-4 rounded-xl shadow-2xl border border-gray-200 sm:w-4/6 w-full text-gray-600'>

          <h1 className="sm:text-4xl text-2xl font-bold text-blue-500 text-center mb-5">Friend's Details</h1>
          <h1 className="sm:text-xl text-lg font-bold">Please enter the Bound Times:</h1>
          <h1 className="sm:text-lg text-md mt-3">From:</h1>
          <Dropdown unit="Hours" arr={hrsarr} setUnit={setBoundHrs3} value={boundHrs3} />
          <Dropdown unit="Minutes" arr={minsarr} setUnit={setBoundMins3} value={boundMins3} />

          <h1 className="sm:text-lg text-md mt-3">To:</h1>
          <Dropdown unit="Hours" arr={hrsarr} setUnit={setBoundHrs4} value={boundHrs4} />
          <Dropdown unit="Minutes" arr={minsarr} setUnit={setBoundMins4} value={boundMins4} />

          {times2.length > 0 ? (
            <div className="my-4">
              <h1 className='font-bold sm:text-lg text-md'>You have meetings from: </h1>
              {times2.map((time) => (
                <div key={time} className="text-lg font-bold">
                  {time[0]} To {time[1]}
                </div>
              ))}
            </div>
          ) : (
            <h1 className='my-4 text-green-400 font-bold sm:text-lg text-sm'>
              You have no meetings today! Enjoy :)
            </h1>
          )}

          <div>
            <button
              className="px-4 py-2 mt-2 outline-blue-500 outline-2 rounded-lg text-blue-500 outline-dashed sm:text-4xl text-2xl font-normal hover:bg-blue-600 hover:outline-none hover:text-white transition-all duration-300"
              onClick={handleAdd2}
            >
              +
            </button>
          </div>

          {isAdding2 && (
            <div className="my-4">
              <h1 className="text-lg font-bold">From:</h1>
              <Dropdown unit="Hours" arr={hrsarr} setUnit={setHrsFrom2} />
              <Dropdown unit="Minutes" arr={minsarr} setUnit={setMinsFrom2} />
              <h1 className="text-lg font-bold">To:</h1>
              <Dropdown unit="Hours" arr={hrsarr} setUnit={setHrsTo2} />
              <Dropdown unit="Minutes" arr={minsarr} setUnit={setMinsTo2} />
              <div>


                <button
                  className="px-4 py-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => {
                    const val = [`${hrsFrom2}:${minsFrom2.toString().padStart(2, '0')}`, `${hrsTo2}:${minsTo2.toString().padStart(2, '0')}`];
                    handleSave2(val);
                    setIsAdding2(!isAdding2);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

        </div>

        <button
          className="text-white bg-[#2563EB] hover:text-[#2563EB] hover:bg-white rounded-full font-montserrat font-normal transition duration-300 px-5 py-3 text-xl"
          onClick={generateSlots}
        >
          Generate
        </button>

        {generatedSlots.length > 0 && (
          <div className="my-1">
            <h1 className='text-gray-600 font-bold text-xl'>Available Slots: </h1>
            {generatedSlots.map((slot, index) => (
              <div key={index} className="text-lg text-gray-600 font-bold">
                {slot[0]} - {slot[1]} {index === generatedSlots.length - 1 ? "" : ", "}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default Scheduler;
