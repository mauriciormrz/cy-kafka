Feature: Enroller ID

    As a message producer,
    I want to add logic to how the EnrollerID is passed through the message,
    So This is because of the logic on the SKava side on how they handle NULL.


    Scenario Outline: User is active and Referral is NULL
        When I insert the "<recordid>" in the "<QueueTable>"

        Examples:
            | QueueTable          | recordid |
            | CustomerChangeQueue | 476033   |



#Verify that If the user is Active and EnrollerID (ReferralID in LDB) is set to NULL  the YLAccountUpdated message passes -1 to Skava.
#
#Verify that If the user is Inactive and the old referralid is NULL in the LDB set the EnrollerID = OldSponsorID and send the oldSponsorID as the EnrollerID to Skava in the YLAccountUpdated message.
#
#Verify that when the OldSponsor is NULL pass Enroller as NULL also.
