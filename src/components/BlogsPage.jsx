import React, { useState } from "react";
import Navbar from "./Navbar";
import BlogVideo from "../assets/BlogPage.mp4";
import BlogThumbnail from "../assets/BlogPageThumbnail.png";
import Blog from "../assets/BlogsText.png";
import BlogImg1 from "../assets/BlogImg-1.png";
import BlogImg2 from "../assets/BlogImg-2.png";
import BlogImg3 from "../assets/BlogImg-3.png";
import Footer from "./Footer";

const BlogCard = ({ image, title, date, preDescription, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  const parseDescription = () => {
    const elements = [];
    const lines = description.split(/\n/);

    lines.forEach((line, index) => {
      // Check for special markers and apply corresponding styles

      // Bold text (lines that start with "*")
      if (line.startsWith("*")) {
        elements.push(
          <p key={index} className="font-bold">
            {line.slice(1).trim()}
          </p>
        );
      }
      // Large text (lines that start with "#")
      else if (line.startsWith("#")) {
        elements.push(
          <p key={index} className="text-lg font-semibold">
            {line.slice(1).trim()}
          </p>
        );
      }
      // Large text (lines that start with "&")
      else if (line.startsWith("&")) {
        elements.push(
          <p key={index} className="italic">
            {line.slice(1).trim()}
          </p>
        );
      }
      // Bullet points (lines that start with "$")
      else if (line.startsWith("$")) {
        elements.push(
          <li key={index} className="list-disc list-inside">
            {line.slice(1).trim()}
          </li>
        );
      }
      // Bullet points (lines that start with "%")
      else if (line.startsWith("%")) {
        elements.push(
          <p key={index} className="text-2xl">
            {line.slice(1).trim()}
          </p>
        );
      }
      // Custom spacer (lines that contain "---")
      else if (line.trim() === "---") {
        elements.push(
          <div key={index} className="h-4 sm:h-6"></div> // Custom space with responsive height
        );
      }
      // Regular text (default case)
      else {
        elements.push(<p key={index}>{line}</p>);
      }
    });

    return (
      <div className="text-left space-y-2">
        <ul className="pl-5 list-disc">{elements}</ul>
      </div>
    );
  };

  return (
    <div
      className={`bg-[#D9D9D9] rounded-lg overflow-hidden shadow-lg flex ${
        isExpanded ? "flex-col items-center" : "flex-row"
      } m-4 sm:m-6 transition-all duration-300`}
    >
      {/* Image */}
      <div
        className={`flex ${
          isExpanded
            ? "mt-0 sm:mt-5 justify-center items-center w-full h-64"
            : "hidden sm:flex w-full sm:w-1/2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className={`object-cover transition-all duration-300 ${
            isExpanded ? "w-auto h-full rounded-lg" : "h-full"
          } ${isExpanded ? "max-h-64" : ""}`}
        />
      </div>

      {/* Content */}
      <div
        className={`p-4 ${
          isExpanded ? "w-full text-center" : "sm:w-1/2"
        } flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
            {title}
          </h2>
          <p className="text-lg text-black mb-4">Release Date: {date}</p>
          <div className="text-black text-base sm:text-md font-QuickSand space-y-2 text-justify ">
            {isExpanded
              ? parseDescription()
              : `${preDescription.substring(0, 390)}...`}
          </div>
        </div>
        <button
          onClick={handleReadMoreClick}
          className="mt-4 text-gray-800 bg-white py-2 px-4 rounded font-semibold hover:bg-gray-300"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <video
          className="w-full h-[50vh] sm:h-[80vh] object-cover"
          src={BlogVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={BlogThumbnail}
        />
        <img
          src={Blog}
          className="animate-fade-in delay-100 absolute top-[40%] sm:top-[60%] left-1/4 transform- translate-x-1/3 -translate-y-1/2 w-1/3"
          alt="Blog Text"
        />
      </div>
      <div className="text-white py-8">
        <header className="text-center mb-8 font-Poppins">
          <p className="text-xl max-w-7xl mx-auto p-2 text-justify sm:text-3xl">
            Discover expert advice, helpful resources, and inspiring stories to
            ensure your dog lives a happy, healthy, and fulfilling life. From
            training tips and nutrition advice to fun activities and grooming
            essentials.
          </p>
        </header>

        {/* Blog Posts */}
        <div className="space-y-8">
          {/* Blog Post 1 */}
          <BlogCard
            image={BlogImg1}
            title="Unleashing the Paw-sitive Power: A Dog Lover's Guide to a Fulfilling Life"
            date="October 23, 2024"
            preDescription="Dogs, those furry bundles of joy, have an extraordinary ability to brighten our lives. They offer unwavering companionship, unconditional love, and a unique perspective on the world. As a dog lover, I've experienced firsthand the transformative power of these incredible creatures.Dogs are more than just pets;They are members of our families. They bring joy, love, and a sense of purpose to our lives. Studies have shown that interacting with dogs can reduce stress, lower blood pressure, and boost our immune systems. Dogs can also help us to stay active and fit, as they encourage us to go for walks, play fetch, or simply spend time outdoors."
            description={`% Dogs, those furry bundles of joy, have an extraordinary ability to brighten our lives. They offer unwavering companionship, unconditional love, and a unique perspective on the world. As a dog lover, I've experienced firsthand the transformative power of these incredible creatures.\n ---\n# Dogs are more than just pets; \nThey are members of our families. They bring joy, love, and a sense of purpose to our lives. Studies have shown that interacting with dogs can reduce stress, lower blood pressure, and boost our immune systems. Dogs can also help us to stay active and fit, as they encourage us to go for walks, play fetch, or simply spend time outdoors.\n---\n One of the most significant benefits of owning a dog is the emotional support they provide. Dogs are always there to listen, without judgment, and offer comfort during difficult times. They can help to alleviate feelings of loneliness and isolation, and provide a sense of belonging and purpose.\n---\n Dogs can also help us to develop important social skills. Dog parks, training classes, and neighborhood walks provide opportunities to meet new people and build social connections. By interacting with other dog owners, we can share experiences, advice, and support.\n---\n In addition to the emotional benefits, dogs can also help us to develop a sense of responsibility and empathy. Caring for a dog requires attention, patience, and understanding. We learn to understand their needs, respond to their emotions, and show kindness and care. This can help us to develop empathy for others and a greater sense of compassion.\n---\n To ensure that our dogs are happy and healthy, we need to provide them with the best possible care. This includes regular veterinary check-ups, a balanced diet, plenty of exercise, and positive reinforcement training. We should also create a safe and stimulating environment for our dogs, providing them with plenty of toys, chewable items, and opportunities to explore.\n---\n It's important to remember that every dog is unique, and what works for one dog may not work for another. It's essential to tailor our care and training methods to the individual needs and personality of our dog.\n---\n If our dog is experiencing behavioral issues, such as aggression or anxiety, it's important to seek professional help from a qualified dog trainer or animal behaviorist. They can provide guidance and support to help us address these issues and improve our dog's behavior.\n---\n In addition to providing physical and emotional support, dogs can also teach us valuable life lessons. They teach us the importance of patience, perseverance, and unconditional love. They remind us to live in the moment, appreciate the simple things in life, and find joy in the little things.\n---\n By spending quality time with our dogs, we can strengthen our bond and create lasting memories. Whether it's going for a walk, playing fetch, or simply cuddling on the couch, these moments of connection are precious and should be cherished.\n---\n# In conclusion, dogs are truly remarkable creatures that have the power to transform our lives. They bring joy, love, and a sense of purpose to our lives. By prioritizing their physical and emotional well-being, we can strengthen our bond and create a fulfilling life together. So, let's celebrate the paw-sitive power of dogs and cherish the incredible companionship they offer.`}
          />

          {/* Blog Post 2 */}
          <BlogCard
            image={BlogImg2}
            title="Keeping Your Canine Companion Safe During Diwali: A Comprehensive Guide"
            date="October 30, 2024"
            preDescription="Diwali, the Festival of Lights, is a time of joy, celebration, and togetherness. However, for our furry friends, the festivities can be a source of stress and anxiety. The loud noises, bright lights, and unfamiliar crowds can overwhelm our canine companions. To ensure their safety and well-being during this festive season, it's essential to take proactive measures. Understanding Canine Fear and Anxiety: Dogs perceive the world differently than humans. The sudden, loud noises of fireworks and crackers can be terrifying for them. They may experience fear, anxiety, and stress, leading to various behavioral changes. These can include excessive barking, whining, pacing, trembling, hiding, or even destructive behavior."
            description={`% Diwali, the Festival of Lights, is a time of joy, celebration, and togetherness. However, for our furry friends, the festivities can be a source of stress and anxiety. The loud noises, bright lights, and unfamiliar crowds can overwhelm our canine companions. To ensure their safety and well-being during this festive season, it's essential to take proactive measures.\n---\n# Understanding Canine Fear and Anxiety:\n---\n Dogs perceive the world differently than humans. The sudden, loud noises of fireworks and crackers can be terrifying for them. They may experience fear, anxiety, and stress, leading to various behavioral changes. These can include excessive barking, whining, pacing, trembling, hiding, or even destructive behavior.\n---\n# Creating a Safe Haven\n---\n$ Soundproof Room: Designate a quiet, soundproof room where your dog can retreat to. This could be a bedroom, bathroom, or any other room that is relatively quiet and away from the noise.\n$ Comfortable Bedding: Provide soft, cozy bedding and blankets to create a sense of security.\n$ Familiar Objects: Surround the space with familiar objects, such as toys, blankets, or their favorite chew toys. These familiar items can provide comfort and reduce anxiety.\n$ Calming Pheromone Diffusers: Consider using calming pheromone diffusers, which can help alleviate stress and promote relaxation.\n---\n# Managing Noise and Stress\n---\n$ Gradual Exposure: If possible, gradually expose your dog to loud noises in controlled settings, such as playing recordings of fireworks at low volumes and gradually increasing the volume over time.\n$ White Noise Machine: Use a white noise machine to mask external sounds and create a calming atmosphere.\n$ Avoid Fireworks: Keep your dog indoors, away from fireworks and noisy celebrations.\n$ Minimize Stressful Situations: Limit the number of visitors to your home during Diwali to reduce stress and provide a peaceful environment for your dog.\n$ Stay Calm Yourself: Your own behavior can influence your dog's stress levels. Remain calm and avoid showing fear or anxiety.\n---\n# Monitoring Your Dog's Behavior\n$ Signs of Stress: Keep a close eye on your dog's behavior during Diwali. Watch for signs of stress, such as excessive panting, pacing, trembling, whining, or hiding.\n$ Consult Your Veterinarian: If your dog exhibits severe signs of stress or anxiety, consult your veterinarian for advice and potential medication. They may recommend calming medications or behavior modification techniques to help your dog cope with the festivities.\n---\n# Providing Comfort and Support\n$ Gentle Reassurance: Offer gentle reassurance and petting to comfort your dog.\n$ Distraction Techniques: Engage your dog in calming activities, such as playing with their favorite toys or going for a walk in a quiet, less crowded area.\n$ Avoid Punishment: Never punish your dog for displaying fear or anxiety during Diwali. Punishment can exacerbate their stress and worsen their behavior.\n$ Positive Reinforcement: Reward calm and relaxed behavior with treats and praise. This can help reinforce positive associations with the festive season.\n---\n# Additional Tips for Dog Owners During Diwali\n$ Microchip Your Dog: Ensure your dog is microchipped with up-to-date contact information. This can help reunite you with your pet if they become lost or scared and run away.\n$ Keep Your Dog Leashed: If you're taking your dog for a walk during Diwali, keep them on a leash at all times. The noise and commotion can startle them, leading to sudden movements and potential accidents.\n$ Avoid Overfeeding: While it's tempting to indulge your furry friend during the festive season, avoid overfeeding them. Stick to their regular diet and avoid giving them too many treats.\n$ Be Mindful of Decorations: Keep an eye on your dog and make sure they don't ingest any harmful decorations or objects.\n$ Provide Adequate Water: Ensure your dog has access to fresh, clean water at all times.\n---\n By following these tips, you can help your dog navigate the Diwali festivities safely and comfortably. Remember, a little extra care and attention can go a long way in ensuring their well-being.\n---\n* In Conclusion\n---\n Diwali is a joyous occasion, but it's important to be mindful of our canine companions during this time. By creating a safe haven, managing noise and stress, monitoring their behavior, and providing comfort and support, we can help our dogs enjoy the festivities without experiencing undue anxiety. Remember, a well-prepared and well-cared-for dog can navigate Diwali with minimal stress.`}
          />

          {/* Blog Post 3 */}
          <BlogCard
            image={BlogImg3}
            title="Nurturing Canine Health and Hygiene: A Comprehensive Guide"
            date="October 26, 2024"
            preDescription="A happy and healthy dog is a joy to behold. To ensure your furry friend thrives, a strong foundation of proper care, including health and hygiene, is essential. This comprehensive guide delves into the key aspects of dog health and hygiene, providing practical tips and expert advice. The Importance of Regular Veterinary Check-ups Regular veterinary check-ups are the cornerstone of canine health. These visits allow your veterinarian to: Monitor Overall Health: Assess your dog's weight, body condition, and vital signs."
            description={`% A happy and healthy dog is a joy to behold. To ensure your furry friend thrives, a strong foundation of proper care, including health and hygiene, is essential. This comprehensive guide delves into the key aspects of dog health and hygiene, providing practical tips and expert advice.\n---\n# The Importance of Regular Veterinary Check-ups\n Regular veterinary check-ups are the cornerstone of canine health. These visits allow your veterinarian to:\n$ Monitor Overall Health: Assess your dog's weight, body condition, and vital signs.\n$ Detect Early Signs of Illness: Identify potential health issues, such as heart disease, kidney disease, or dental problems, in their early stages.\n$ Administer Vaccinations: Keep your dog protected from contagious diseases.\n$ Provide Preventive Care: Recommend preventive treatments like heartworm and flea/tick prevention.\n$ Address Behavioral Concerns: Consult with your veterinarian about any behavioral issues, such as aggression or anxiety.\n---\n# Nutrition: Fueling Canine Well-being\n A balanced diet is crucial for a dog's overall health. Consult your veterinarian to determine the appropriate diet for your dog's age, breed, and activity level. Consider the following factors when selecting a dog food:\n$ High-Quality Ingredients: Opt for dog food with high-quality protein sources, healthy fats, and whole grains.\n$ Appropriate Caloric Content: Avoid overfeeding, as it can lead to obesity and other health problems.\n$ Fresh Water: Ensure your dog always has access to fresh, clean water.\n---\n# Dental Hygiene: A Smile That Lasts \n Dental health is often overlooked but is crucial for a dog's well-being. Poor dental hygiene can lead to painful infections and systemic health issues. Practice these dental care tips:\n$ Regular Brushing: Brush your dog's teeth at least 2-3 times a week with a pet-friendly toothpaste and toothbrush.\n$ Dental Chews and Treats: Provide dental chews and treats specifically designed to clean teeth and freshen breath.\n$ Professional Dental Cleanings: Schedule regular professional dental cleanings to remove tartar and plaque buildup.\n---\n# Grooming: Keeping Your Dog Looking and Feeling Great \n Regular grooming is essential for maintaining your dog's coat, skin, and overall hygiene. The frequency of grooming will depend on your dog's breed and coat type. Consider the following grooming tips:\n$ Brushing: Brush your dog's coat regularly to remove loose hair, prevent matting, and distribute natural oils.\n$ Bathing: Bathe your dog as needed, using a gentle, dog-specific shampoo. Avoid over-bathing, as it can strip the skin of natural oils.\n$ Nail Trimming: Trim your dog's nails regularly to prevent them from becoming too long and causing discomfort.\n$ Ear Cleaning: Clean your dog's ears regularly to prevent infections. Use a gentle ear cleaner recommended by your veterinarian.\n---\n# Exercise and Mental Stimulation \n Regular exercise and mental stimulation are essential for a dog's physical and mental health. Engage your dog in activities such as:\n$ Daily Walks: Take your dog for daily walks to provide exercise and mental stimulation.\n$ Playtime: Play fetch, tug-of-war, or other interactive games to keep your dog active and engaged.\n$ Training Sessions: Train your dog with positive reinforcement techniques to keep their mind sharp and bond with you.\n---\n# Preventing Parasites and Diseases\n Protect your dog from parasites and diseases by:\n$ Heartworm Prevention: Administer heartworm preventive medication as prescribed by your veterinarian.\n$ Flea and Tick Prevention: Use flea and tick prevention products to protect your dog from these pesky parasites.\n$ Vaccinations: Keep your dog up-to-date on vaccinations to prevent contagious diseases.\n---\n# Creating a Safe and Healthy Environment\n A safe and clean environment is crucial for your dog's well-being. Take the following precautions:\n$ Secure Your Home: Ensure your home is safe for your dog by removing any potential hazards, such as toxic substances or small objects they could swallow.\n$ Regular Cleaning: Clean and disinfect your dog's living area, food and water bowls, and toys regularly.\n$ Proper Waste Disposal: Clean up after your dog promptly to prevent the spread of diseases. \n---\n* By following these guidelines, you can provide your furry friend with a long, healthy, and happy life. Remember, a proactive approach to dog health and hygiene is the key to a thriving canine companion.`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
