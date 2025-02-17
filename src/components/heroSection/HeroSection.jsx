// import { Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? '#2A2D2E' : '#BCBCBC' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://img.icons8.com/?size=100&id=58240&format=png&color=000000" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>MyBlogs</h1>
                        </div>

                        {/* Paragraph  */}
                        {/* <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs .
                        </p> */}
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection