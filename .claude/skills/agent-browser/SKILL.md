---
description: Browser automation skill using agent-browser CLI
invocation: auto
---

# agent-browser Skill

You have access to the `agent-browser` CLI tool for headless browser automation.

## Workflow

1. **Open a page**: `agent-browser open <url>`
2. **Get element refs**: `agent-browser snapshot -i` (returns accessibility tree with @refs)
3. **Interact using refs**: `agent-browser click @e2` or `agent-browser fill @e3 "text"`
4. **Get information**: `agent-browser get text @e1`
5. **Screenshot**: `agent-browser screenshot`

## Core Commands

```bash
# Navigation
agent-browser open <url>           # Navigate to URL
agent-browser back                 # Go back
agent-browser forward              # Go forward
agent-browser reload               # Reload page

# Get element references (IMPORTANT: use this to find elements)
agent-browser snapshot             # Full accessibility tree with @refs
agent-browser snapshot -i          # Interactive elements only (recommended)
agent-browser snapshot -c          # Compact (remove empty elements)

# Interact with elements (use @ref from snapshot)
agent-browser click @e2            # Click element by ref
agent-browser dblclick @e2         # Double-click
agent-browser type @e3 "hello"     # Type text (appends)
agent-browser fill @e3 "hello"     # Clear and fill (replaces)
agent-browser hover @e2            # Hover element
agent-browser focus @e2            # Focus element
agent-browser check @e2            # Check checkbox
agent-browser uncheck @e2          # Uncheck checkbox
agent-browser select @e2 "option"  # Select dropdown option

# Keyboard
agent-browser press Enter          # Press key
agent-browser press Control+a     # Key combo

# Get information
agent-browser get text @e1         # Get text content
agent-browser get html @e1         # Get HTML
agent-browser get value @e1        # Get input value
agent-browser get title            # Get page title
agent-browser get url              # Get current URL

# Check state
agent-browser is visible @e1       # Check if visible
agent-browser is enabled @e1       # Check if enabled
agent-browser is checked @e1       # Check if checked

# Screenshots
agent-browser screenshot           # Take screenshot
agent-browser screenshot --full    # Full page screenshot
agent-browser screenshot output.png

# Scrolling
agent-browser scroll down 500      # Scroll down 500px
agent-browser scroll up 500        # Scroll up 500px
agent-browser scrollintoview @e2   # Scroll element into view

# Wait
agent-browser wait @e2             # Wait for element
agent-browser wait 2000            # Wait 2 seconds

# JavaScript
agent-browser eval "document.title"
```

## Example: Login Flow

```bash
agent-browser open https://example.com/login
agent-browser snapshot -i
# Output shows: @e1 [textbox] "Email", @e2 [textbox] "Password", @e3 [button] "Sign In"
agent-browser fill @e1 "user@example.com"
agent-browser fill @e2 "password123"
agent-browser click @e3
agent-browser wait 2000
agent-browser screenshot login-result.png
```

## Example: Scrape Content

```bash
agent-browser open https://news.ycombinator.com
agent-browser snapshot -i
agent-browser get text @e1
```

## Tips

- Always use `snapshot -i` first to get element references
- Use @refs (like @e1, @e2) from snapshot output to target elements
- Use `--json` flag for machine-readable output
- Use `--headed` to see the browser window for debugging

