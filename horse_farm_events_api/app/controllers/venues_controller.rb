class VenuesController < ActionController    

before_action :set_venue, only: [:show]

# GET /venues
def index
    @venues =  Venue.all
    render json: @venues.to_json(include: :events)
  end

  # GET /venues/1
  def show
    render json: @venue.to_json(include: :events)
    #this is called eager loading to include events when you show the venue
   #.to_json means get venue object and use the events key nested within that object
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue
      @venue = Venue.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def venue_params
      params.require(:venue).permit(:name)
    end
end
