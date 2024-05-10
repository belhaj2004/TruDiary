import React, {useState} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import ReactModal from 'react-modal';

export function SupportGroupsList(props) {
    const [email, setEmail] = useState('');
    const URL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/user/getUserByEmail?email=';


    const supportGroups = [
        {
            "title" : "First Time Moms",
            "description" : "A group meant for first time moms who are seeking advice.",
        },
        {
            "title": "Experienced Moms",
            "description": "A group for experienced moms to share their wisdom and support first-time moms on their journey.",
        },
        {
            "title": "Single Moms Network",
            "description": "A supportive community for single moms navigating pregnancy and parenting on their own.",
        },
        {
            "title": "Natural Birth Enthusiasts",
            "description": "For moms interested in natural childbirth methods, offering advice and encouragement for a holistic birthing experience.",
        },
        {
            "title": "High-Risk Pregnancy Warriors",
            "description": "A group for moms facing high-risk pregnancies, providing support, resources, and encouragement during challenging times.",
        },
        {
            "title": "Fitness During Pregnancy",
            "description": "A community for pregnant women interested in maintaining an active lifestyle, sharing workout tips, and staying fit during pregnancy.",
        },
        {
            "title": "Rainbow Moms (After Pregnancy Loss)",
            "description": "Support for moms who have experienced pregnancy loss and are now on the journey to welcome a rainbow baby.",
        },
        {
            "title": "Breastfeeding Champions",
            "description": "A group dedicated to supporting and empowering moms on their breastfeeding journey, offering advice and sharing experiences.",
        },
        {
            "title": "Working Moms-to-Be",
            "description": "For pregnant women balancing the challenges of work and impending motherhood, sharing tips on managing both successfully.",
        },
        {
            "title": "Adoptive Moms Expecting",
            "description": "A community for moms-to-be through adoption, providing support and guidance on the unique aspects of adopting while pregnant.",
        },
        {
            "title": "Military Moms Support",
            "description": "Support for pregnant women whose partners are in the military, addressing the unique challenges and offering a network of understanding peers.",
        },
    ];

    const SupportGroupButton = () => {
      const [modalIsOpen, setModalIsOpen] = useState(false);

      const openModal = () => {
        setModalIsOpen(true);
      };

      const closeModal = () => {
        setModalIsOpen(false);
      };

      const joinSupportGroup = () => {
        openModal();
        // You can perform other actions related to joining the support group here
      };

      return (
        <>
          <Button variant="outlined" style={{ margin: '15px' }} type="button" onClick={joinSupportGroup}>
            Join
          </Button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Support Group Joined"
            style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                      width: '300px',
                      height: '200px',
                      margin: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    },
                  }}
          >
            <h2>Support Group Joined</h2>
            <p>Thank you for joining the support group!</p>
            <Button variant="outlined" onClick={closeModal}>
              OK
            </Button>
          </ReactModal>
        </>
      );
    };


    const aList = supportGroups.map(supportGroup => {
            // replace option with your component name
            return (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {supportGroup.title}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {supportGroup.description}
                        </Typography>
                        <SupportGroupButton></SupportGroupButton>
                    </CardContent>
                </Card>
            );
        }
    );



    return (
        <div style={{margin : '5px'}}>
            <div className = "heading" style={{margin : '5px'}}>
                <h1>Support Groups</h1>
                {aList}
            </div>
        </div>
    )
}