<p id="notice"><%= notice %></p>

<div id="title">
  <h2><%= @post.title %></h2>
  <h4>last edited: 07/06/2017</h4>
  by: &nbsp;<h3 style="display: inline-block"> Carlos Almonte</h3>
</div>

<div class="post-body">
  <%= @post.body%>
  <div>
  <p>Becoming a software developer can be expensive, especially if you choose to do it through a coding bootcamp. With prices ranging from 12k to 20k is not surprising that most aspiring software developers will at least try to reach a certain level of knowledge on their own. And I was no stranger to this.</p>

  <p>After discovering the beautiful craft of software development ,I dug everywhere looking for some of that free knowledge. Successfully, (at least I thought), I found resources like <code>codecademy</code>, <code>teamtreehouse</code>, <code>stackoverflow</code> and <code>reddit</code> that gave me enough to create a few crafts here and there. However, two weeks into bootcamp was enough for me to notice that these crafts were nothing but a structure built on top of an ice cream layer, waiting for the slightest heat wave to tear it all down. </p>

  <div class="image-holder" style="">
    <a href="https://imgflip.com/i/1s2mbu"><img src="https://i.imgflip.com/1s2mbu.jpg" title="made at imgflip.com" alt="Y'all got some of that free knowledge? Meme"/></a>
  </div>


<p>One of the most prominent mistakes in my code pre-bootcamp was not sticking to the DRY principle --My code was wet and smelled like inexperience all over the place, see an example below.
</p>

<script src="https://gist.github.com/carlosalmonte04/899629a671b1905149b409d5c5d959eb.js"></script>

<p>As you can see I would execute <code>.height()</code> & <code>.width()</code> a few times inside <code>myResize()</code>. Seems like a pretty acceptable mistake if you only had these two conditions defined above, however, my actual <code>myResize()</code> function resizes almost all elements on my project, and many rely on individual conditions to resize accordingly, meaning that in many cases, each 'resizable' element on my project would call <code>.height()</code> & <code>.width()</code>... Talk about a laggy scrolling/resizing...</p>

<p>Easy enough, first week into bootcamp I was introduced to the DRY principle. See example below.</p>

<script src="https://gist.github.com/carlosalmonte04/1b441a10ea4b6258e40a5e22c6596aed.js"></script>


<p>The DRY principle is only one of many principles that many self-taught developers do not get to know about. And these are principles that do not show when you google 'how to center an image' or 'how to create a user authentication feature'.</p>

<p>
To summarize, what I have learned on my own was crucial to the coding skills that I have today. Self teaching is a practice that never ends for a Software Developer and I a grateful I started this way. However, it would have been very difficult for me to learn 'enterprise development skills' if it was not through a bootcamp. As a self-taught 'you don't know what you don't know', whereas on a bootcamp you have instructors to tell you exactly just that.
</p>
</div>
</div>

  <tbody>
    
  </tbody>
</table>

<br>

          <!-- BEGIN FOOTER -->
      <div class="row">
        <div class="side-content"></div>
        <div class="main-content">
          <div class="content-header">
          </div>
          <div class="content-body footer">
            <p>Copyright&copy; Carlos Almonte 2017</p>
          </div>
        </div>
        <div class="side-content"></div>
      </div>
      <!-- END FOOTER -->

