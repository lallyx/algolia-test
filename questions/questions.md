*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


Hi Marissa,

I'm sorry to hear you're having difficulties with our new design.
With each iteration we strive to make our UI more seamless and our UX as simple as possible, although sometimes when moving functionalities our accustomed users may feel lost as they were used to a previous interface.

I've looked into your issue and I believe we have a feature that may have gone unnoticed, but that could make your operations smoother.

If you go to your list of indices and press on 'select page' on the top left, you'll be able to select the indices you need and then clear/delete them.

Please find attached a couple of screenshots to illustrate these steps.
[Attaching screenshots with arrows pointing at the buttons]

Let me know if you need further assistance with this.

Best regards,

Thomas

--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   


Hi Carrie,

Thank you for reaching out with your query.

The error you're seeing is related to the size of the records you're pushing over to our servers.
As you mentioned, some of the data you're including in the records is not relevant for search purposes, and as such, it would be ideal to remove the parameters that will not be used in your indexing.
By sending over too many parameters, you may end up having  many unhelpful options to choose from in our interface, making your setup more tedious and your future analysis more complex than it should be.

You can find a more detailed explanation and some examples on our documentation: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/#:~:text=To%20ensure%20good%20performance%2C%20Algolia,before%20sending%20them%20to%20Algolia.

Please do let me know if anything's not clear or if you'd need to speak directly over the phone to clarify any needed steps.

Best regards,

Thomas



*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

Hi Mark,

I'm afraid the error you're seeing is not related to our service offering.
Although similar in naming and functionalities, searchkit is an open source library that is not directly affiliated with Algolia.

The error you're seeing is being thrown because your website is calling such library, without it having been first imported.
I would suggest to revise your searchkit implementation by checking that the library has been successfully imported on the page currently throwing the error, making sure that all the files required are present and available.

Best regards,

Thomas

