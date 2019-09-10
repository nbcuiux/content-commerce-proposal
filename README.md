## Installation This App =)

### Install Ruby v2.4 or Above

After getting ruby from Xcode. I would recommend using RVM to install 2.4. 

GPG is a prerequisite for RVM, install with homebrew:
```brew install gpg```

You can then install RVM from the terminal with:
 ```curl -L https://get.rvm.io | bash -s stable```

Then install Ruby v2.4.
```rvm install ruby-2.4.1```

### Install the Jekyl gem

```sudo gem install jekyll```

### Install the Jekyl Paginate Gem, one of our dependencies.

```sudo gem install jekyll-paginate```

### Now you're ready to go! Get to work!

```jekyll serve```

### Build the app for deployment with: 

```jekyl build```