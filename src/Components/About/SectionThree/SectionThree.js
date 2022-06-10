import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionThree.css'
import Sabiul from '../../Image/88321387_2792258667486759_288762436700340224_n.jpg'
const SectionThree = () => {
    return (
        <div className='BgColor'>
           <Container>
               <div className='row'>
                   <div className='col-lg-5 col-md-5 col-sm-4 pt-5 pb-5 SectionThreeContentOne' >
                        <img src={Sabiul} alt="" />
                   </div>

                   <div className='col-lg-7 col-md-7 col-sm-8 SectionThreeContentTwo pt-5'>
                      <b><h1 >Learn Something Every Day</h1></b>
                      <p className="pb-3">Quality is Our Assurance</p>
                      <p className="pb-3">IT Training BD, one of the leading software testing companies in the world,
                           delivers software testing services and quality assurance services for desktop
                            and mobile applications to ensure that you ship a quality product. Our testing
                             experts work directly with your team to create an end-to-end process that 
                             works consistently and efficiently while providing you dedicated support
                              and seamless feedback. Our services are directed to help you achieve quality at
                           speed and ensure that you have a secure online presence</p>

                           <h3><b>Sabiul Islam Rashed </b></h3>
                           <h4 className="pb-3"><b>Founder</b></h4>
                  </div>


               </div>
           </Container>
        </div>
    );
};

export default SectionThree;